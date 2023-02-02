// Added Slider for Testimonial //
const config={
    speed:2000,
    loop:true,
    autoplay:{
        delay:500,
        disabledOnIteraction:true
    },
    pagination:{
        el: ".swiper-pagination",
    }
}
new swiper('.testimonials-slider',config)
new Typed('.typed',{
    strings: ['adcsacas,acac','asdsad','zzz'],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000
})
new PureCounter();