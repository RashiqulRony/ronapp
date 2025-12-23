import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
    const router = useRouter()

    router.afterEach(() => {
        setTimeout(() => {
            new Swiper(".review-carousel", {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: !0,
                navigation: {nextEl: ".review-carousel-button-next", prevEl: ".review-carousel-button-prev"},
                breakpoints: {1: {slidesPerView: 1}, 768: {slidesPerView: 2}}
            })

            new Swiper(".blog-carousel", {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: !0,
                navigation: {nextEl: ".blog-carousel-button-next", prevEl: ".blog-carousel-button-prev"},
                breakpoints: {1: {slidesPerView: 1}, 768: {slidesPerView: 2}}
            })
        }, 500)
    })
})