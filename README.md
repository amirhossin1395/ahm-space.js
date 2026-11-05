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
- **Planetary Weight:** Calculate how much you would weigh on Mars, the Moon, or Jupiter.
- **Astronomical Tools:** Sunrise/Sunset times, Moon phases, Planetary positions, Earth rotation speed, and Julian Date conversion.

### 📦 Installation & Usage

Since `ahm-space` is hosted on **GitHub Packages**, follow these steps:

**1. Create an `.npmrc` file in your project root:**
```text
@amirhossin1395:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

### 🛡️ License
This project is licensed under the MIT License.
---

<div dir="rtl">

## 🇮🇷 فارسی

### 📖 درباره کتابخانه
**AhmSpace.js** یک کتابخانه جاوااسکریپت فوق‌سبک و بدون وابستگی است که برای توسعه‌دهندگانی طراحی شده که به محاسبات دقیق نجومی، فیزیکی و کیهانی در وب‌اپلیکیشن‌های خود نیاز دارند. 

### ✨ ویژگی‌ها
- **فیزیک گرانش:** محاسبه نیروی گرانش بین دو جرم، سرعت فرار و سرعت مداری.
- **مکانیک مداری:** محاسبه دوره تناوب مداری اجرام آسمانی با استفاده از قانون سوم کپلر.
- **فیزیک نسبیتی:** محاسبه اتساع زمان برای اجسامی که با سرعت نزدیک به نور حرکت می‌کنند.
- **اخترفیزیک:** محاسبه شعاع شوارتزشیلد (افق رویداد) سیاهچاله‌ها.
- **کیهان‌شناسی:** تخمین سن کیهان و محاسبه دمای تابش زمینه کیهانی (CMB).
- **ردیابی ماهواره:** محاسبه دقیق زوایای Azimuth و Elevation برای تنظیم دیش ماهواره.
- **وزن در سیارات:** محاسبه وزن شما در مریخ، ماه یا مشتری.
- **ابزارهای نجومی:** زمان طلوع/غروب خورشید، فازهای ماه، موقعیت سیارات، سرعت چرخش زمین، و تبدیل تاریخ به ژولیَن دیت.

### 📦 نصب و استفاده (برای برنامه‌نویس‌ها)
از آنجایی که این پکیج روی **GitHub Packages** میزبانی می‌شود، برای نصب آن در پروژه خود مراحل زیر را دنبال کنید:

**۱. ساخت توکن دسترسی (PAT)**
به تنظیمات گیت‌هاب خود بروید (**Settings > Developer settings > Personal access tokens > Tokens (classic)**) و یک توکن با دسترسی `read:packages` بسازید.

**۲. ساخت فایل `.npmrc`**
در روت پروژه خود، فایلی به نام `.npmrc` بسازید و خطوط زیر را در آن قرار دهید:
`@amirhossin1395:registry=https://npm.pkg.github.com`
`//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`

*(به جای `YOUR_GITHUB_TOKEN` توکن خود را قرار دهید).*

**۳. نصب پکیج**
`npm install @amirhossin1395/ahm-space`

**۴. استفاده در کد**
`const AhmSpace = require('@amirhossin1395/ahm-space');`

**۵. مثال: محاسبه وزن در مریخ**
`const weightOnMars = AhmSpace.calculateWeight(50, 'Mars');`
`console.log(\`وزن در مریخ: \${weightOnMars} کیلوگرم\`);`

### 🛡️ لایسنس
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
- **天文工具：** 日出/日落时间、月相、行星位置、地球自转速度和儒略日转换。

### 📦 安装与使用（面向开发者）
由于 `ahm-space` 托管在 **GitHub Packages** 上，请按以下步骤安装：

**1. 创建个人访问令牌 (PAT)**
前往 GitHub 设置生成一个具有 `read:packages` 权限的令牌。

**2. 创建 `.npmrc` 文件**
在项目根目录创建 `.npmrc` 并添加：
`@amirhossin1395:registry=https://npm.pkg.github.com`
`//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`

**3. 安装包**
`npm install @amirhossin1395/ahm-space`

**4. 在代码中使用**
`const AhmSpace = require('@amirhossin1395/ahm-space');`

**5. 示例：计算在火星上的重量**
`const weightOnMars = AhmSpace.calculateWeight(50, 'Mars');`
`console.log('Weight on Mars: ' + weightOnMars + ' kg');`

### 🛡️ 许可证
本项目采用 MIT 许可证。
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
- **علم الكونيات:** تقدير عمر الكون وحساب درجة حرارة إشعاع الخلفية الكونية الميكروي (CMB).
- **تتبع الأقمار الصناعية:** حساب زوايا السمت والارتفاع الدقيقة لمحاذاة طبق القمر الصناعي.
- **أدوات فلكية:** أوقات شروق/غروب الشمس، أطوار القمر، مواقع الكواكب، سرعة دوران الأرض، وتحويل التاريخ اليولياني.

### 📦 التثبيت والاستخدام (للمطورين)
نظرًا لأن `ahm-space` مستضاف على **GitHub Packages**، اتبع الخطوات التالية:

**1. إنشاء رمز وصول شخصي (PAT)**
انتقل إلى إعدادات GitHub وقم بإنشاء رمز بصلاحية `read:packages`.

**2. إنشاء ملف `.npmrc`**
في جذر مشروعك، أنشئ ملف `.npmrc` وأضف الأسطر التالية:
`@amirhossin1395:registry=https://npm.pkg.github.com`
`//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`

**3. تثبيت الحزمة**
`npm install @amirhossin1395/ahm-space`

**4. استخدامها في الكود**
`const AhmSpace = require('@amirhossin1395/ahm-space');`

**5. مثال: حساب الوزن على المريخ**
`const weightOnMars = AhmSpace.calculateWeight(50, 'Mars');`
`console.log('الوزن على المريخ: ' + weightOnMars + ' كجم');`

### 🛡️ الترخيص
هذا المشروع مرخص بموجب ترخيص MIT.

</div>
---

## 🇷🇺 Русский

### 📖 О библиотеке
**AhmSpace.js** — это сверхлегкая библиотека JavaScript без зависимостей, созданная для разработчиков, которым нужны точные астрономические, физические и космологические расчеты в веб-приложениях. Строите ли вы трекер спутников, космическую игру или образовательную платформу, AhmSpace.js предоставит вам необходимую математическую основу.

### ✨ Особенности
- **Гравитационная физика:** Расчет силы притяжения между двумя массами, скорости убегания и орбитальной скорости.
- **Орбитальная механика:** Расчет орбитального периода небесных тел с использованием третьего закона Кеплера.
- **Релятивистская физика:** Расчет замедления времени для объектов, движущихся со скоростью, близкой к скорости света.
- **Астрофизика:** Расчет радиуса Шварцшильда (горизонта событий) черных дыр.
- **Космология:** Оценка возраста Вселенной и расчет температуры реликтового излучения (CMB).
- **Отслеживание спутников:** Расчет точных углов азимута и возвышения для наведения спутниковой антенны.
- **Астрономические инструменты:** Время восхода/заката, фазы Луны, положения планет, скорость вращения Земли и преобразование юлианской даты.

### 📦 Установка и использование (для разработчиков)
Поскольку `ahm-space` размещен на **GitHub Packages**, выполните следующие шаги:

**1. Создайте токен личного доступа (PAT)**
Перейдите в настройки GitHub и создайте токен с областью действия `read:packages`.

**2. Создайте файл `.npmrc`**
В корне вашего проекта создайте файл `.npmrc` и добавьте:
`@amirhossin1395:registry=https://npm.pkg.github.com`
`//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN`

**3. Установите пакет**
`npm install @amirhossin1395/ahm-space`

**4. Используйте в коде**
`const AhmSpace = require('@amirhossin1395/ahm-space');`

**5. Пример: расчет веса на Марсе**
`const weightOnMars = AhmSpace.calculateWeight(50, 'Mars');`
`console.log('Вес на Марсе: ' + weightOnMars + ' кг');`

### 🛡️ Лицензия
Этот проект распространяется под лицензией MIT.

---

<div align="center">

### 🌟 If you like this project, please give it a ⭐ Star!

**Made with ❤️ by [Amirhossein Haji Moradkhani (AHM)](https://github.com/amirhossin1395)**

</div>
