// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // desktop setup code here...
    mm.add("(min-width: 800px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-1",
                // markers: true,
                start: "25% 50%",
                end: "45% 50%",
                scrub: 2
            }
        }).to(".hidden-text h1", {
            y: -360
        })
    });

    // mobile setup code here...
    mm.add("(max-width: 799px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-1",
                // markers: true,
                start: "40% 50%",
                end: "60% 50%",
                scrub: 2
            }
        }).to(".hidden-text h1", {
            y: -148
        })
    });


});