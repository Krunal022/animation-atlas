// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            // markers: true,
            start: "0% 0%",
            end: "100% 0%",
            pin: true,
            scrub: true,
        }
    })
    tl.to('.text-hover h1', {
        stagger: .3,
        ease: "power2.out",
        width: "100%"
    })

    let split = SplitText.create(".heading", {
        type: "words, chars, lines",
        mask: 'lines'
    })

    gsap.from(split.lines, {
        duration: .5,
        y: 100,         // animate from 100px below
        autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
        stagger: 0.05,  // 0.05 seconds between each
    })


    let splitAnother = SplitText.create(".three-text h1", {
        type: "words, chars, lines",
        mask: 'lines'
    })


    gsap.from(splitAnother.chars, {
        scrollTrigger: {
            trigger: '.three',
            start: '-10% 0%',
            end: '0% 0%', 
            scrub: 2,
            // markers: true
        },
        x: 150,
        opacity: 0,
        duration: 0.07,
        ease: "power4",
        stagger: 0.04

    })
})





let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    // desktop setup code here...

});

mm.add("(max-width: 799px)", () => {
    // mobile setup code here...
});
// });