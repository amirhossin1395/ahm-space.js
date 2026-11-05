<div align="center">

# 🚀 ahm-space.js

### A professional, ultra-lightweight JavaScript library for space, astronomy, and cosmological calculations. 🌌

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
 
---
 🇮🇷 فارسی
---
درباره کتابخانه
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
---

## 🇨🇳 中文

### 📖 关于
**AhmSpace.js** 是一个零依赖、超轻量级的 JavaScript 库，专为需要在 Web 应用程序中进行精确的天文、物理和宇宙学计算的开发者而设计。无论您是在构建卫星跟踪器、太空游戏还是教育平台，AhmSpace.js 都能提供您所需的数学核心。

### ✨ 功能特点
- **引力物理：** 计算两个质量之间的引力、逃逸速度和轨道速度。
- **轨道力学：** 使用开普勒第三定律计算天体的轨道周期。
- **相对论物理：** 计算接近光速运动的物体的时间膨胀。
- **天体物理学：** 计算黑洞的史瓦西半径（事件视界）。
- **宇宙学：** 估算宇宙年龄并计算不同红移下的宇宙微波背景（CMB）温度。
- **卫星跟踪：** 根据地理坐标计算用于卫星天线对准的精确方位角和仰角。
- **占星术：** 根据出生日期确定星座。
---
💻 使用示例
```javascript
const AhmSpace = require('ahm-space');

// 1. 计算地球的逃逸速度
const earthEscapeVelocity = AhmSpace.escapeVelocity(AhmSpace.CONSTANTS.EARTH_MASS, AhmSpace.CONSTANTS.EARTH_RADIUS);
console.log(`地球逃逸速度: ${earthEscapeVelocity} m/s`);

// 2. 计算从克尔曼指向卫星的卫星天线角度
const dishAngle = AhmSpace.calculateDishAngle(30.28, 57.08, 0, 0);
console.log(`方位角: ${dishAngle.azimuth}°, 仰角: ${dishAngle.elevation}°`);
```
---
许可证
---
本项目采用 MIT 许可证。

text

### 🇸🇦 

---

<div dir="rtl">

## 🇸🇦 العربية

### 📖 حول المكتبة
**AhmSpace.js** هي مكتبة JavaScript خفيفة للغاية وبدون أي تبعيات، مصممة للمطورين الذين يحتاجون إلى حسابات فلكية وفيزيائية وكونية دقيقة في تطبيقات الويب الخاصة بهم. سواء كنت تبني متتبع أقمار صناعية، أو لعبة فضاء، أو منصة تعليمية، فإن AhmSpace.js يوفر لك النواة الرياضية التي تحتاجها.

### ✨ الميزات
- **فيزياء الجاذبية:** حساب قوة الجاذبية بين كتلتين، سرعة الإفلات، والسرعة المدارية.
- **الميكانيكا المدارية:** حساب الفترة المدارية للأجرام السماوية باستخدام قانون كبلر الثالث.
- **الفيزياء النسبية:** حسابات تمدد الوقت للأجسام التي تتحرك بسرعات قريبة من سرعة الضوء.
- **الفيزياء الفلكية:** حساب نصف قطر شفارتزشيلد (أفق الحدث) للثقوب السوداء.
- **علم الكونيات:** تقدير عمر الكون وحساب درجة حرارة إشعاع الخلفية الكونية الميكروي (CMB) عند انزياحات حمراء مختلفة.
- **تتبع الأقمار الصناعية:** حساب زوايا السمت والارتفاع الدقيقة لمحاذاة طبق القمر الصناعي بناءً على الإحداثيات الجغرافية.
- **التنجيم:** تحديد الأبراج بناءً على تواريخ الميلاد.

---
💻 مثال على الاستخدام
---
```
```javascript
const AhmSpace = require('ahm-space');

// 1. حساب سرعة الإفلات للأرض
const earthEscapeVelocity = AhmSpace.escapeVelocity(AhmSpace.CONSTANTS.EARTH_MASS, AhmSpace.CONSTANTS.EARTH_RADIUS);
console.log(`سرعة الإفلات للأرض: ${earthEscapeVelocity} م/ث`);

// 2. حساب زاوية طبق القمر الصناعي من كرمان
const dishAngle = AhmSpace.calculateDishAngle(30.28, 57.08, 0, 0);
console.log(`السمت: ${dishAngle.azimuth}°, الارتفاع: ${dishAngle.elevation}°`);
```
🛡️ الترخيص
هذا المشروع مرخص بموجب ترخيص MIT.

</div> ```
🇷🇺 
markdown
---

## 🇷🇺 Русский

### 📖 О библиотеке
**AhmSpace.js** — это сверхлегкая библиотека JavaScript без зависимостей, созданная для разработчиков, которым нужны точные астрономические, физические и космологические расчеты в веб-приложениях. Строите ли вы трекер спутников, космическую игру или образовательную платформу, AhmSpace.js предоставит вам необходимую математическую основу.

### ✨ Особенности
- **Гравитационная физика:** Расчет силы притяжения между двумя массами, скорости убегания и орбитальной скорости.
- **Орбитальная механика:** Расчет орбитального периода небесных тел с использованием третьего закона Кеплера.
- **Релятивистская физика:** Расчет замедления времени для объектов, движущихся со скоростью, близкой к скорости света.
- **Астрофизика:** Расчет радиуса Шварцшильда (горизонта событий) черных дыр.
- **Космология:** Оценка возраста Вселенной и расчет температуры реликтового излучения (CMB) при различных красных смещениях.
- **Отслеживание спутников:** Расчет точных углов азимута и возвышения для наведения спутниковой антенны на основе географических координат.
- **Астрология:** Определение знаков зодиака по датам рождения.

```
---
💻 Пример использования
---
```
```javascript
const AhmSpace = require('ahm-space');

// 1. Расчет скорости убегания Земли
const earthEscapeVelocity = AhmSpace.escapeVelocity(AhmSpace.CONSTANTS.EARTH_MASS, AhmSpace.CONSTANTS.EARTH_RADIUS);
console.log(`Скорость убегания Земли: ${earthEscapeVelocity} м/с`);

// 2. Расчет угла спутниковой антенны из Кермана
const dishAngle = AhmSpace.calculateDishAngle(30.28, 57.08, 0, 0);
console.log(`Азимут: ${dishAngle.azimuth}°, Возвышение: ${dishAngle.elevation}°`);
```
🛡️ Лицензия
Этот проект распространяется под лицензией MIT.




---

<div align="center">

### 🌟 If you like this project, please give it a ⭐ Star!

**Made with ❤️ by [Amirhossein Haji Moradkhani (AHM)](https://github.com/amirhossin1395)**

</div>
