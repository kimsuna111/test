var swiper = new Swiper("#banner .mySwiper", {
 pagination: {
   el: ".swiper-pagination",
   type: "fraction",
 },
 navigation: {
   nextEl: "#banner .swiper-button-next",
   prevEl: "#banner .swiper-button-prev",
 },
});


var Swiper = new Swiper(".book.mySwiper", {
 slidesPerView: 4,
 spaceBetween: 30,
 freeMode: true,
});