document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("open",);
});



  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide('.splide', {
      type: 'loop',   // السلايدر يعمل بشكل دائري
      perPage: 3,     // يعرض 3 صور في كل مرة
      perMove: 1,     // يتحرك كل مرة بعنصر واحد
      autoplay: false, // التشغيل التلقائي
      interval: 3000, // الانتقال بين الصور كل 3 ثوانٍ
      gap: '20px',    // مسافة بين العناصر
      breakpoints: {
        768: { perPage: 2 },  // على الشاشات الصغيرة يعرض عنصرين فقط
        480: { perPage: 1 },  // على الشاشات الأصغر يعرض عنصر واحد فقط
      }
    });

    splide.mount(); // تشغيل السلايدر
  });


  document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("name");
    let emailInput = document.getElementById("Email-Address");
    let numberInput = document.getElementById("Mobile-Number");
    let errorName = document.getElementById("errorrname");
    let errorEmail = document.getElementById("errorremail");
  
    document.forms[0].onsubmit = function (e) {
      let userValid = true;
      let emailValid = true;
  
      //  التحقق من الاسم
      if (userInput.value.trim() === "") {
        userValid = false;
        errorName.classList.remove("hidden");
       
        userInput.style.border = "1px solid red";
      } else {
        errorName.classList.add("hidden");
        userInput.style.border = "";
      }
  
      //  التحقق من البريد الإلكتروني
      if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        emailValid = false;
        errorEmail.classList.remove("hidden");
        errorEmail.innerText = "Enter a valid email address";
        emailInput.style.border = "1px solid red";
      } else {
        errorEmail.classList.add("hidden");
        emailInput.style.border = "";
      }
  
      //منع الإرسال إذا كان هناك أخطاء
      if (!userValid || !emailValid) {
        e.preventDefault();
      }
    };
  });
  

