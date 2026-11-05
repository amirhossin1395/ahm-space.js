/**
 * AhmSpace.js - Professional Space & Astronomy Calculations
 * Version: 2.14.0
 * Author: Amirhossein Haji Moradkhani (AHM)
 * License: MIT
 */

const AhmSpace = (function() {
    // ========== ثابت‌های کیهانی (دقیق‌تر) ==========
    const CONSTANTS = {
        G: 6.67430e-11,           // ثابت گرانش (m^3 kg^-1 s^-2)
        C: 299792458,             // سرعت نور (m/s)
        AU: 149597870700,         // واحد نجومی (متر)
        LIGHT_YEAR: 9.4607e15,    // سال نوری (متر)
        PARSEC: 3.0857e16,        // پارسک (متر)
        
        // جرم‌ها (کیلوگرم)
        EARTH_MASS: 5.9722e24,
        SUN_MASS: 1.9885e30,
        MOON_MASS: 7.342e22,
        MARS_MASS: 6.4171e23,
        JUPITER_MASS: 1.8982e27,
        
        // شعاع‌ها (متر)
        EARTH_RADIUS: 6371000,
        SUN_RADIUS: 696340000,
        MOON_RADIUS: 1737400,
        MARS_RADIUS: 3389500,
        JUPITER_RADIUS: 69911000,
        
        HUBBLE_CONSTANT: 70,      // ثابت هابل (km/s/Mpc)
        
        // گرانش سیارات (m/s^2) - برای محاسبه وزن
        GRAVITY: {
            Earth: 9.80665,
            Moon: 1.62,
            Mars: 3.72076,
            Jupiter: 24.79,
            Venus: 8.87,
            Saturn: 10.44,
            Neptune: 11.15
        }
    };

    // ========== 1. فیزیک گرانش و مدار ==========
    function gravitationalForce(mass1, mass2, distance) {
        return (CONSTANTS.G * mass1 * mass2) / (distance * distance);
    }

    function escapeVelocity(mass, radius) {
        return Math.sqrt((2 * CONSTANTS.G * mass) / radius);
    }

    function orbitalVelocity(centralMass, radius) {
        return Math.sqrt((CONSTANTS.G * centralMass) / radius);
    }

    function orbitalPeriod(centralMass, semiMajorAxis) {
        const timeInSeconds = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / (CONSTANTS.G * centralMass));
        return timeInSeconds / 86400; // روز
    }

    // ========== 2. تبدیلات و نسبیت ==========
    function lightYearToKm(ly) {
        return (ly * CONSTANTS.LIGHT_YEAR) / 1000;
    }

    function parsecToLightYear(pc) {
        return (pc * CONSTANTS.PARSEC) / CONSTANTS.LIGHT_YEAR;
    }

    function timeDilation(velocity) {
        if (velocity >= CONSTANTS.C) return Infinity;
        return 1 / Math.sqrt(1 - Math.pow(velocity / CONSTANTS.C, 2));
    }

    function schwarzschildRadius(mass) {
        return (2 * CONSTANTS.G * mass) / (CONSTANTS.C * CONSTANTS.C);
    }

    // ========== 3. کیهان‌شناسی ==========
    function universeAge() {
        const h0InSeconds = CONSTANTS.HUBBLE_CONSTANT * 1000 / (3.086e22); 
        return 1 / h0InSeconds / 31536000 / 1e9; // میلیارد سال
    }

    function cmbTemperature(redshift) {
        const currentTemp = 2.725; // کلوین
        return currentTemp * (1 + redshift);
    }

    function hubbleDistance(redshift) {
        const recessionVelocity = redshift * CONSTANTS.C / 1000; // km/s
        return recessionVelocity / CONSTANTS.HUBBLE_CONSTANT; // Mpc
    }

    // ========== 4. دیش و ماهواره ==========
    function calculateDishAngle(earthLat, earthLon, satelliteLat, satelliteLon, satelliteAltitude = 35786000) {
        const toRad = (deg) => deg * (Math.PI / 180);
        const toDeg = (rad) => rad * (180 / Math.PI);
        
        const lat1 = toRad(earthLat);
        const lon1 = toRad(earthLon);
        const lat2 = toRad(satelliteLat);
        const lon2 = toRad(satelliteLon);
        const deltaLon = lon2 - lon1;
        
        const y = Math.sin(deltaLon) * Math.cos(lat2);
        const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
        const azimuth = toDeg(Math.atan2(y, x));
        
        const r = CONSTANTS.EARTH_RADIUS;
        const h = satelliteAltitude;
        const gamma = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(deltaLon));
        const elevation = toDeg(Math.atan((Math.cos(gamma) - (r / (r + h))) / Math.sin(gamma)));
        
        return {
            azimuth: (azimuth + 360) % 360,
            elevation: elevation > 0 ? elevation : 0
        };
    }

    // ========== 5. نجوم و تاریخ ==========
    function getZodiac(month, day) {
        const zodiacs = [
            { name: 'Capricorn (بزغاله)', start: [12, 22], end: [1, 19] },
            { name: 'Aquarius (آبریز)', start: [1, 20], end: [2, 18] },
            { name: 'Pisces (حوت)', start: [2, 19], end: [3, 20] },
            { name: 'Aries (حمل)', start: [3, 21], end: [4, 19] },
            { name: 'Taurus (ثور)', start: [4, 20], end: [5, 20] },
            { name: 'Gemini (جوزا)', start: [5, 21], end: [6, 20] },
            { name: 'Cancer (سرطان)', start: [6, 21], end: [7, 22] },
            { name: 'Leo (اسد)', start: [7, 23], end: [8, 22] },
            { name: 'Virgo (سنبله)', start: [8, 23], end: [9, 22] },
            { name: 'Libra (میزان)', start: [9, 23], end: [10, 22] },
            { name: 'Scorpio (عقرب)', start: [10, 23], end: [11, 21] },
            { name: 'Sagittarius (قوس)', start: [11, 22], end: [12, 21] }
        ];

        for (let z of zodiacs) {
            if (z.start[0] === z.end[0]) {
                if (month === z.start[0] && day >= z.start[1] && day <= z.end[1]) return z.name;
            } else {
                if ((month === z.start[0] && day >= z.start[1]) || (month === z.end[0] && day <= z.end[1])) {
                    return z.name;
                }
            }
        }
        return 'Unknown';
    }

    // ========== 6. توابع جدید نسخه 2.14.0 ==========
    
    // محاسبه وزن در سیارات مختلف
    function calculateWeight(weightOnEarth, planetName) {
        const g = CONSTANTS.GRAVITY[planetName];
        if (!g) return null;
        return (weightOnEarth / CONSTANTS.GRAVITY.Earth) * g;
    }

    // تبدیل زمان زمین به زمان مریخ (یک روز مریخی = 24 ساعت و 39 دقیقه و 35 ثانیه)
    function earthDaysToMarsDays(earthDays) {
        const marsDayInHours = 24.6597;
        const earthHours = earthDays * 24;
        return earthHours / marsDayInHours;
    }

    // محاسبه اندازه ظاهری خورشید یا ماه در آسمان
    function apparentSize(realDiameter, distance) {
        return (realDiameter / distance) * (180 / Math.PI) * 60; // دقیقه قوسی
    }

    // ========== توابع کمکی ==========
    function degToRad(deg) { return deg * (Math.PI / 180); }
    function radToDeg(rad) { return rad * (180 / Math.PI); }
    function formatNumber(num) { return num.toLocaleString('fa-IR'); }

    // ========== خروجی نهایی ==========
    return {
        CONSTANTS,
        gravitationalForce,
        escapeVelocity,
        orbitalVelocity,
        orbitalPeriod,
        lightYearToKm,
        parsecToLightYear,
        timeDilation,
        schwarzschildRadius,
        universeAge,
        cmbTemperature,
        hubbleDistance,
        calculateDishAngle,
        getZodiac,
        // New in v2.14.0
        calculateWeight,
        earthDaysToMarsDays,
        apparentSize,
        // Utils
        degToRad,
        radToDeg,
        formatNumber
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AhmSpace;
}