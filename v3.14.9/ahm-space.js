/**
 * AhmSpace.js - Professional Space & Astronomy Calculations
 * Version: 3.14.9 (The Astronomical Edition)
 * Author: Amirhossein Haji Moradkhani (AHM)
 * License: MIT
 */

const AhmSpace = (function() {
    // ========== ثابت‌های کیهانی ==========
    const CONSTANTS = {
        G: 6.67430e-11, C: 299792458, AU: 149597870700, LIGHT_YEAR: 9.4607e15, PARSEC: 3.0857e16,
        EARTH_MASS: 5.9722e24, SUN_MASS: 1.9885e30, MOON_MASS: 7.342e22, MARS_MASS: 6.4171e23, JUPITER_MASS: 1.8982e27,
        EARTH_RADIUS: 6371000, SUN_RADIUS: 696340000, MOON_RADIUS: 1737400, MARS_RADIUS: 3389500, JUPITER_RADIUS: 69911000,
        HUBBLE_CONSTANT: 70,
        GRAVITY: { Earth: 9.80665, Moon: 1.62, Mars: 3.72076, Jupiter: 24.79, Venus: 8.87, Saturn: 10.44, Neptune: 11.15 }
    };

    // ========== 1. فیزیک گرانش و مدار ==========
    function gravitationalForce(m1, m2, d) { return (CONSTANTS.G * m1 * m2) / (d * d); }
    function escapeVelocity(m, r) { return Math.sqrt((2 * CONSTANTS.G * m) / r); }
    function orbitalVelocity(M, r) { return Math.sqrt((CONSTANTS.G * M) / r); }
    function orbitalPeriod(M, a) { return (2 * Math.PI * Math.sqrt(Math.pow(a, 3) / (CONSTANTS.G * M))) / 86400; }

    // ========== 2. تبدیلات و نسبیت ==========
    function lightYearToKm(ly) { return (ly * CONSTANTS.LIGHT_YEAR) / 1000; }
    function parsecToLightYear(pc) { return (pc * CONSTANTS.PARSEC) / CONSTANTS.LIGHT_YEAR; }
    function timeDilation(v) { if (v >= CONSTANTS.C) return Infinity; return 1 / Math.sqrt(1 - Math.pow(v / CONSTANTS.C, 2)); }
    function schwarzschildRadius(m) { return (2 * CONSTANTS.G * m) / (CONSTANTS.C * CONSTANTS.C); }

    // ========== 3. کیهان‌شناسی ==========
    function universeAge() { const h0 = CONSTANTS.HUBBLE_CONSTANT * 1000 / (3.086e22); return 1 / h0 / 31536000 / 1e9; }
    function cmbTemperature(z) { return 2.725 * (1 + z); }
    function hubbleDistance(z) { return (z * CONSTANTS.C / 1000) / CONSTANTS.HUBBLE_CONSTANT; }

    // ========== 4. توابع جدید (3.14.9) ==========
    
    // محاسبه وزن در سیارات
    function calculateWeight(w, p) { const g = CONSTANTS.GRAVITY[p]; return g ? (w / CONSTANTS.GRAVITY.Earth) * g : null; }

    // تبدیل زمان زمین به مریخ
    function earthDaysToMarsDays(d) { return (d * 24) / 24.6597; }

    // اندازه ظاهری
    function apparentSize(d, distance) { return (d / distance) * (180 / Math.PI) * 60; }

    // ۱. محاسبه طلوع و غروب خورشید (تقریبی)
    function getSunriseSunset(lat, lon, date = new Date()) {
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        const declination = 23.44 * Math.sin((360 / 365) * (dayOfYear - 81) * (Math.PI / 180));
        const hourAngle = Math.acos(-Math.tan(lat * Math.PI / 180) * Math.tan(declination * Math.PI / 180)) * 180 / Math.PI;
        const solarNoon = 12 - (lon / 15);
        const sunrise = solarNoon - (hourAngle / 15);
        const sunset = solarNoon + (hourAngle / 15);
        return { sunrise: sunrise.toFixed(2), sunset: sunset.toFixed(2) };
    }

    // ۲. محاسبه فاز ماه (تقریبی)
    function getMoonPhase(date = new Date()) {
        const lp = 2551443; // دوره ماه (ثانیه)
        const newMoon = new Date('2000-01-06T18:14:00Z').getTime();
        const phase = ((date.getTime() - newMoon) / 1000) % lp;
        const phasePercent = phase / lp;
        if (phasePercent < 0.03 || phasePercent > 0.97) return 'ماه نو (New Moon) 🌑';
        if (phasePercent < 0.22) return 'هلال افزایشی (Waxing Crescent) 🌒';
        if (phasePercent < 0.28) return 'تربیع اول (First Quarter) 🌓';
        if (phasePercent < 0.47) return 'کوژ افزایشی (Waxing Gibbous) 🌔';
        if (phasePercent < 0.53) return 'ماه کامل (Full Moon) 🌕';
        if (phasePercent < 0.72) return 'کوژ کاهشی (Waning Gibbous) 🌖';
        if (phasePercent < 0.78) return 'تربیع آخر (Last Quarter) 🌗';
        return 'هلال کاهشی (Waning Crescent) 🌘';
    }

    // ۳. موقعیت سیارات (تقریبی بر اساس روز سال)
    function getPlanetPosition(planet, date = new Date()) {
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        const positions = {
            'Mercury': (dayOfYear * 4.09) % 360, 'Venus': (dayOfYear * 1.6) % 360,
            'Mars': (dayOfYear * 0.52) % 360, 'Jupiter': (dayOfYear * 0.08) % 360, 'Saturn': (dayOfYear * 0.03) % 360
        };
        return { planet: planet, angle: positions[planet] ? positions[planet].toFixed(2) + '°' : 'نامشخص' };
    }

    // ۴. سرعت چرخش زمین
    function getEarthRotationSpeed(lat) {
        const equatorSpeed = 1674.4; // km/h
        return { rotationSpeed: (equatorSpeed * Math.cos(lat * Math.PI / 180)).toFixed(2) + ' km/h', orbitalSpeed: '107,226 km/h' };
    }

    // ۵. تبدیل تاریخ به ژولیَن دیت
    function toJulianDate(date = new Date()) {
        return (date.getTime() / 86400000) + 2440587.5;
    }

    // ۶. تبدیل تقریبی شمسی/قمری به ژولیَن (برای نجوم)
    function persianToJulianDate(pYear, pMonth, pDay) {
        const gYear = pYear + 621;
        const gDate = new Date(gYear, pMonth - 1, pDay + 20); // تقریب
        return toJulianDate(gDate);
    }

    // ========== 5. نجوم و تاریخ ==========
    function getZodiac(month, day) {
        const z = [{n:'Capricorn (بزغاله)',s:[12,22],e:[1,19]},{n:'Aquarius (آبریز)',s:[1,20],e:[2,18]},{n:'Pisces (حوت)',s:[2,19],e:[3,20]},{n:'Aries (حمل)',s:[3,21],e:[4,19]},{n:'Taurus (ثور)',s:[4,20],e:[5,20]},{n:'Gemini (جوزا)',s:[5,21],e:[6,20]},{n:'Cancer (سرطان)',s:[6,21],e:[7,22]},{n:'Leo (اسد)',s:[7,23],e:[8,22]},{n:'Virgo (سنبله)',s:[8,23],e:[9,22]},{n:'Libra (میزان)',s:[9,23],e:[10,22]},{n:'Scorpio (عقرب)',s:[10,23],e:[11,21]},{n:'Sagittarius (قوس)',s:[11,22],e:[12,21]}];
        for (let i of z) { if (i.s[0] === i.e[0] ? (month === i.s[0] && day >= i.s[1] && day <= i.e[1]) : ((month === i.s[0] && day >= i.s[1]) || (month === i.e[0] && day <= i.e[1]))) return i.n; }
        return 'Unknown';
    }

    // ========== خروجی نهایی ==========
    return {
        CONSTANTS, gravitationalForce, escapeVelocity, orbitalVelocity, orbitalPeriod,
        lightYearToKm, parsecToLightYear, timeDilation, schwarzschildRadius,
        universeAge, cmbTemperature, hubbleDistance, calculateWeight, earthDaysToMarsDays, apparentSize,
        getSunriseSunset, getMoonPhase, getPlanetPosition, getEarthRotationSpeed, toJulianDate, persianToJulianDate, getZodiac,
        degToRad: (d) => d * (Math.PI / 180), radToDeg: (r) => r * (180 / Math.PI), formatNumber: (n) => n.toLocaleString('fa-IR')
    };
})();

if (typeof module !== 'undefined' && module.exports) { module.exports = AhmSpace; }