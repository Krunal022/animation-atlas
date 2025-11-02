//use the defaults
// gsap.to('.element', { duration: 1, scrambleText: "THIS IS NEW TEXT" });


// customize things:
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