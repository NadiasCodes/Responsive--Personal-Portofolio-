// Swipper

let swiperProject = new Swiper(".projects-container", {
  spaceBetween: 10,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  },
});

//Scroll-Reveal animation
ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".header", { delay: 500 });
ScrollReveal().reveal(".h2-subheader, .links-title", { delay: 800 });
ScrollReveal().reveal(".images-reveal", { delay: 1500, origin: "left" });
ScrollReveal().reveal(".main-content", { delay: 600, origin: "left" });
ScrollReveal().reveal(".profile", { delay: 600, origin: "top" });
ScrollReveal().reveal(".skills-reveal", { delay: 700, origin: "left" });
ScrollReveal().reveal(".achievements", { delay: 200, origin: "left" });
ScrollReveal().reveal(".swiper-wrapper", { delay: 600, origin: "left" });
ScrollReveal().reveal(".swiper", { delay: 600, origin: "left" });

ScrollReveal().reveal(".contact-header", { delay: 500, origin: "top" });
ScrollReveal().reveal(".contact-details", { delay: 680, origin: "left" });
ScrollReveal().reveal(".contact-links-h5, .arrow-reveal", { delay: 720, origin: "left" });
