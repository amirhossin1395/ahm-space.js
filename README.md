<div align="center">

# 🚀 ahm-space.js

### A professional, ultra-lightweight JavaScript library for space, astronomy, and cosmological calculations. 🌌

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue?style=for-the-badge&logo=npm)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Made by AHM](https://img.shields.io/badge/Made%20by-Amirhossein%20Haji%20Moradkhani-10b981?style=for-the-badge)](https://github.com/amirhossin1395)

[English](#-english) • [فارسی](#-فارسی) • [中文](#-中文) • [العربية](#-العربية) • [Русский](#-русский)

</div>

---

## 🇬🇧 English

### 📖 About
**AhmSpace.js** is a zero-dependency, ultra-lightweight JavaScript library designed for developers who need accurate astronomical, physical, and cosmological calculations in their web applications. Whether you are building a satellite tracker, a space game, or an educational platform, AhmSpace.js provides the mathematical core you need.

### ✨ Features
- **Gravitational Physics:** Calculate gravitational force between two masses, escape velocity, and orbital velocity.
- **Orbital Mechanics:** Calculate the orbital period of celestial bodies using Kepler's Third Law.
- **Relativistic Physics:** Time dilation calculations for objects moving at near-light speeds.
- **Astrophysics:** Calculate the Schwarzschild radius (event horizon) of black holes.
- **Cosmology:** Estimate the age of the universe and calculate cosmic microwave background (CMB) temperature at different redshifts.
- **Satellite Tracking:** Calculate precise Azimuth and Elevation angles for satellite dish alignment based on geographic coordinates.
- **Astrology:** Determine zodiac signs based on birth dates.
---
### 🚀 Installation
```bash
npm install ahm-space
```
---
💻 Usage Example
---
```javascript
const AhmSpace = require('ahm-space');

// 1. Calculate the escape velocity of Earth
const earthEscapeVelocity = AhmSpace.escapeVelocity(AhmSpace.CONSTANTS.EARTH_MASS, AhmSpace.CONSTANTS.EARTH_RADIUS);
console.log(`Earth Escape Velocity: ${earthEscapeVelocity} m/s`);

// 2. Calculate the angle to point a satellite dish from Kerman
const dishAngle = AhmSpace.calculateDishAngle(30.28, 57.08, 0, 0);
console.log(`Azimuth: ${dishAngle.azimuth}°, Elevation: ${dishAngle.elevation}°`);

// 3. Calculate the radius of a black hole with the mass of the Sun
const blackHoleRadius = AhmSpace.schwarzschildRadius(AhmSpace.CONSTANTS.SUN_MASS);
console.log(`Schwarzschild Radius: ${blackHoleRadius / 1000} km`);
```
---
🛡️ License
---
This project is licensed under the MIT License.
---
<div dir="rtl">
🇮🇷 فارسی
📖درباره کتابخانه
ahm-space.js یک کتابخانه جاوااسکریپت فوق‌سبک و بدون وابستگی است که برای توسعه‌دهندگانی طراحی شده که به محاسبات دقیق نجومی، فیزیکی و کیهانی در وب‌اپلیکیشن‌های خود نیاز دارند. فرقی نمی‌کند در حال ساخت یک ردیاب ماهواره، یک بازی فضایی یا یک پلتفرم آموزشی باشید؛ ahm-space.js هسته ریاضیاتی مورد نیاز شما را فراهم می‌کند.
---

✨ ویژگی‌ها
---
فیزیک گرانش: محاسبه نیروی گرانش بین دو جرم، سرعت فرار و سرعت مداری.

مکانیک مداری: محاسبه دوره تناوب مداری اجرام آسمانی با استفاده از قانون سوم کپلر.

فیزیک نسبیتی: محاسبه اتساع زمان برای اجسامی که با سرعت نزدیک به نور حرکت می‌کنند.

اخترفیزیک: محاسبه شعاع شوارتزشیلد (افق رویداد) سیاهچاله‌ها.

کیهان‌شناسی: تخمین سن کیهان و محاسبه دمای تابش زمینه کیهانی (CMB) در انتقال‌های به سرخ مختلف.

ردیابی ماهواره: محاسبه دقیق زوایای Azimuth و Elevation برای تنظیم دیش ماهواره بر اساس مختصات جغرافیایی.
---
🚀 نصب
---
```bash
npm install ahm-space
```
---
💻 مثال استفاده
---
```javascript
const AhmSpace = require('ahm-space');

// ۱. محاسبه سرعت فرار زمین
const earthEscapeVelocity = AhmSpace.escapeVelocity(AhmSpace.CONSTANTS.EARTH_MASS, AhmSpace.CONSTANTS.EARTH_RADIUS);
console.log(`سرعت فرار زمین: ${earthEscapeVelocity} متر بر ثانیه`);

// ۲. محاسبه زاویه دیش برای ماهواره از کرمان
const dishAngle = AhmSpace.calculateDishAngle(30.28, 57.08, 0, 0);
console.log(`زاویه سمت (Azimuth): ${dishAngle.azimuth}°، زاویه ارتفاع (Elevation): ${dishAngle.elevation}°`);

// ۳. محاسبه شعاع یک سیاهچاله با جرم خورشید
const blackHoleRadius = AhmSpace.schwarzschildRadius(AhmSpace.CONSTANTS.SUN_MASS);
console.log(`شعاع شوارتزشیلد: ${blackHoleRadius / 1000} کیلومتر`);

```
---
🛡️ لایسنس
---
این پروژه تحت لایسنس MIT منتشر شده است.

</div>

