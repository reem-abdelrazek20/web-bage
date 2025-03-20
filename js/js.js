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



