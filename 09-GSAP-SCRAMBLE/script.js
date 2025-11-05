// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    let tl = gsap.timeline({
        scrollTrigger: ({
            trigger: ".page-2",
            start: "-30% 20%",
            end: "100% 100%",
            scrub: 2,
            // markers: true,
        })
    })
        .to(".heading", {
            duration: 3,
            scrambleText: {
                text: "Hi! I'm Krunal, a front-end web developer and UI/UX designer. I build clean, responsive interfaces with HTML, CSS, and JavaScript, and craft scroll-powered magic using GSAP, ScrollTrigger, and Locomotive. Skilled in React and currently learning backend with the MERN stack, I’m on a mission to build full-stack web apps that feel smooth, modern, and unforgettable.",
                chars: "upperAndLowerCase",
                stagger: .88,
            }
        });

    gsap.to('.element h1', {
        duration: 1,
        repeat: -1,
        repeatDelay: 1.5,
        scrambleText: {
            text: "KRUNAL THIS SIDE :)",
            chars: "XO",
            revealDelay: 0.5,
            speed: 0.3,
            newClass: "myClass"
        }
    });
});

