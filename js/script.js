const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let btn = document.querySelector(".header-general__btn")
btn.addEventListener("click" ,() =>{
    document.querySelector(".header-general__modal").style.display ="block"
})

let btnClose = document.querySelector(".header-general__modal__block__square h1")
btnClose.addEventListener("click" ,() =>{
    document.querySelector(".header-general__modal").style.display ="none"
})