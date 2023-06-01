let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times'); /* Toggle the 'fa-times' class on the menu button when clicked */
    navbar.classList.toggle('active'); /* Toggle the 'active' class on the navbar when clicked */
}

window.onscroll = () =>{
    menu.classList.remove('fa-times'); /* Remove the 'fa-times' class from the menu button when the window is scrolled */
    navbar.classList.remove('active'); /* Remove the 'active' class from the navbar when the window is scrolled */
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src'); /* Get the source attribute of the clicked image */
        document.querySelector('.main-home-image').src = src; /* Set the source attribute of the main home image to the clicked image source */
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20, /* Set the space between slides in the review slider */
    pagination: {
      el: ".swiper-pagination", /* Set the pagination element for the review slider */
      clickable: true, /* Enable clickable pagination bullets */
    },
    loop : true, /* Enable loop mode in the review slider */
    grabCursor: true, /* Enable the grab cursor when hovering over the review slider */
    autoplay: {
        delay: 7500, /* Set the autoplay delay for the review slider */
        disableOnInteraction: false, /* Continue autoplay even when the user interacts with the slider */
    },
    breakpoints: {
        0: {
          slidesPerView: 1, /* Set the number of slides per view for screen width 0px and above */
        },
        768: {
          slidesPerView: 2, /* Set the number of slides per view for screen width 768px and above */
        },
    },
});