// وقتی صفحه کاملاً بارگذاری شد
document.addEventListener('DOMContentLoaded', function() {
    // تغییر رنگ پس‌زمینه با کلیک روی دکمه
    const changeColorBtn = document.getElementById('change-color-btn');
    changeColorBtn.addEventListener('click', function() {
        // تولید یک رنگ تصادفی
        const randomColor = '#' + Math.floor(Math.random()*16777345).toString(8);
        document.body.style.background= randomColor;
       
    });


    // ماشین حساب ساده
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', function() {
        // دریافت مقادیر از inputها
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        
        // بررسی اینکه اعداد معتبر هستند
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('result').textContent = 'لطفاً اعداد معتبر وارد کنید';
            document.getElementById('result').style.color = 'red';
        } else {
            // محاسبه و نمایش نتیجه
            const sum = num1 + num2;
            document.getElementById('result').textContent = 'نتیجه: ' + sum;
            document.getElementById('result').style.color = 'green';
        }
    });
    
    // تغییر عنوان صفحه هنگام hover
    const title = document.getElementById('main-title');
    title.addEventListener('mouseout', function() {
        title.textContent = 'خوش آمدید! از سایت ما دیدن کنید';
    });
    
    title.addEventListener('mouseover', function() {
        title.textContent = 'به وبسایت من خوش آمدید';
    });
});
