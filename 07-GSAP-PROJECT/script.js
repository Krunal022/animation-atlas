
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main",
            pin: true,
            start: "0% 0%",
            end: "220% 50%",
            scrub: 2,
            // markers: true,
        }
    })
        .to(".card1", {
            y: "-110%"
        })
        .to(".card2", {
            y: "-110%"
        }, 'a')
        .to(".card1", {
            scale: .7,
            rotate: 7,
            opacity: 0
        }, 'a')
        .to(".card3", {
            y: "-110%"
        }, 'b')
        .to(".card2", {
            scale: .7,
            rotate: -7,
            opacity: 0
        }, 'b')
        .to(".card4", {
            y: "-110%"
        }, 'c')
        .to(".card3", {
            scale: .7,
            rotate: 7,
            opacity: 0
        }, 'c')

});