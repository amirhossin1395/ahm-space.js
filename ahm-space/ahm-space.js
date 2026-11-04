/**
 * AhmSpace.js - کتابخانه محاسبات فضایی و کهکشانی
 * نسخه: 1.0.0
 * سازنده: امیرحسین حاجی مرادخانی (AHM)
 */

const AhmSpace = (function() {
    // ========== ثابت‌های کیهانی ==========
    const CONSTANTS = {
        G: 6.67430e-11,           // ثابت گرانش جهانی (m^3 kg^-1 s^-2)
        C: 299792458,             // سرعت نور (m/s)
        AU: 149597870700,         // واحد نجومی (متر)
        LIGHT_YEAR: 9.4607e15,    // سال نوری (متر)
        PARSEC: 3.0857e16,        // پارسک (متر)
        EARTH_MASS: 5.972e24,     // جرم زمین (کیلوگرم)
        SUN_MASS: 1.989e30,       // جرم خورشید (کیلوگرم)
        EARTH_RADIUS: 6371000,    // شعاع زمین (متر)
        HUBBLE_CONSTANT: 70,      // ثابت هابل (km/s/Mpc)
    };

    // ========== 1. فیزیک گرانش و مدار ==========

    // محاسبه نیروی گرانش بین دو جرم
    function gravitationalForce(mass1, mass2, distance) {
        return (CONSTANTS.G * mass1 * mass2) / (distance * distance);
    }

    // محاسبه سرعت فرار (Escape Velocity)
    function escapeVelocity(mass, radius) {
        return Math.sqrt((2 * CONSTANTS.G * mass) / radius);
    }

    // محاسبه سرعت مداری (Orbital Velocity)
    function orbitalVelocity(centralMass, radius) {
        return Math.sqrt((CONSTANTS.G * centralMass) / radius);
    }

    // محاسبه دوره تناوب مداری (Orbital Period) - بر اساس قانون سوم کپلر
    function orbitalPeriod(centralMass, semiMajorAxis) {
        // فرمول: T = 2 * PI * sqrt(a^3 / (G * M))
        const timeInSeconds = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / (CONSTANTS.G * centralMass));
        return timeInSeconds / 86400; // تبدیل به روز
    }

    // ========== 2. تبدیلات نجومی و نسبیتی ==========

    // تبدیل سال نوری به کیلومتر
    function lightYearToKm(ly) {
        return (ly * CONSTANTS.LIGHT_YEAR) / 1000;
    }

    // تبدیل پارسک به سال نوری
    function parsecToLightYear(pc) {
        return (pc * CONSTANTS.PARSEC) / CONSTANTS.LIGHT_YEAR;
    }

    // اتساع زمان (Time Dilation) - نسبیت خاص
    function timeDilation(velocity) {
        if (velocity >= CONSTANTS.C) return Infinity;
        return 1 / Math.sqrt(1 - Math.pow(velocity / CONSTANTS.C, 2));
    }

    // محاسبه فاصله تا افق رویداد سیاهچاله (شعاع شوارتزشیلد)
    function schwarzschildRadius(mass) {
        return (2 * CONSTANTS.G * mass) / (CONSTANTS.C * CONSTANTS.C);
    }

    // ========== 3. اخترفیزیک و کیهان‌شناسی ==========

    // محاسبه سن کیهان بر اساس ثابت هابل (تقریبی)
    function universeAge() {
        // سن کیهان = 1 / H0 (با تبدیل واحدها)
        const h0InSeconds = CONSTANTS.HUBBLE_CONSTANT * 1000 / (3.086e22); 
        return 1 / h0InSeconds / 31536000 / 1e9; // میلیارد سال
    }

    // محاسبه دمای زمینه کیهانی (CMB) در گذشته
    function cmbTemperature(redshift) {
        const currentTemp = 2.725; // کلوین
        return currentTemp * (1 + redshift);
    }

    // محاسبه فاصله تا یک کهکشان با قانون هابل
    function hubbleDistance(redshift) {
        // فاصله = (سرعت دور شدن) / ثابت هابل
        const recessionVelocity = redshift * CONSTANTS.C / 1000; // km/s
        return recessionVelocity / CONSTANTS.HUBBLE_CONSTANT; // مگاپارسک
    }

    // ========== 4. محاسبات دیش و ردیابی ماهواره ==========

    // محاسبه زاویه دیش (Azimuth و Elevation)
    function calculateDishAngle(earthLat, earthLon, satelliteLat, satelliteLon, satelliteAltitude = 35786000) {
        const toRad = (deg) => deg * (Math.PI / 180);
        const toDeg = (rad) => rad * (180 / Math.PI);
        
        const lat1 = toRad(earthLat);
        const lon1 = toRad(earthLon);
        const lat2 = toRad(satelliteLat);
        const lon2 = toRad(satelliteLon);
        
        const deltaLon = lon2 - lon1;
        
        // محاسبه Azimuth
        const y = Math.sin(deltaLon) * Math.cos(lat2);
        const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
        const azimuth = toDeg(Math.atan2(y, x));
        
        // محاسبه Elevation (با فرض مدار زمین‌آهنگ)
        const r = CONSTANTS.EARTH_RADIUS;
        const h = satelliteAltitude;
        const gamma = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(deltaLon));
        const elevation = toDeg(Math.atan((Math.cos(gamma) - (r / (r + h))) / Math.sin(gamma)));
        
        return {
            azimuth: (azimuth + 360) % 360, // 0 تا 360 درجه
            elevation: elevation > 0 ? elevation : 0
        };
    }

    // ========== 5. تاریخ و صور فلکی ==========

    // تشخیص صورت فلکی (زودیاک)
    function getZodiac(month, day) {
        const zodiacs = [
            { name: 'بزغاله', start: [12, 22], end: [1, 19] },
            { name: 'آبریز', start: [1, 20], end: [2, 18] },
            { name: 'حوت', start: [2, 19], end: [3, 20] },
            { name: 'حمل', start: [3, 21], end: [4, 19] },
            { name: 'ثور', start: [4, 20], end: [5, 20] },
            { name: 'جوزا', start: [5, 21], end: [6, 20] },
            { name: 'سرطان', start: [6, 21], end: [7, 22] },
            { name: 'اسد', start: [7, 23], end: [8, 22] },
            { name: 'سنبله', start: [8, 23], end: [9, 22] },
            { name: 'میزان', start: [9, 23], end: [10, 22] },
            { name: 'عقرب', start: [10, 23], end: [11, 21] },
            { name: 'قوس', start: [11, 22], end: [12, 21] }
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
        return 'نامشخص';
    }

    // ========== 6. توابع کمکی ==========

    // تبدیل درجه به رادیان
    function degToRad(deg) {
        return deg * (Math.PI / 180);
    }

    // تبدیل رادیان به درجه
    function radToDeg(rad) {
        return rad * (180 / Math.PI);
    }

    // فرمت کردن اعداد بزرگ
    function formatNumber(num) {
        return num.toLocaleString('fa-IR');
    }

    // ========== خروجی نهایی ==========
    return {
        // ثابت‌ها
        CONSTANTS,
        // گرانش و مدار
        gravitationalForce,
        escapeVelocity,
        orbitalVelocity,
        orbitalPeriod,
        // تبدیلات و نسبیت
        lightYearToKm,
        parsecToLightYear,
        timeDilation,
        schwarzschildRadius,
        // کیهان‌شناسی
        universeAge,
        cmbTemperature,
        hubbleDistance,
        // دیش و ماهواره
        calculateDishAngle,
        // تاریخ و نجوم
        getZodiac,
        // کمکی
        degToRad,
        radToDeg,
        formatNumber
    };
})();

// برای استفاده در Node.js (اگه بعداً خواستی)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AhmSpace;
}