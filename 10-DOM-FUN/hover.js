
const lineH = document.querySelector(".line-horizontal");
const lineV = document.querySelector(".line-vertical");
const filterX = document.getElementById("filterX");
const filterY = document.getElementById("filterY");

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let pos = { x: mouse.x, y: mouse.y };
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Mouse move
window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Fade in crosshair on first movement
    gsap.to([lineH, lineV], { duration: 0.3, opacity: 1, ease: "power3.out" });
});

// Smooth animation loop
function render() {
    pos.x = lerp(pos.x, mouse.x, 0.18);
    pos.y = lerp(pos.y, mouse.y, 0.18);

    gsap.set(lineV, { x: pos.x });
    gsap.set(lineH, { y: pos.y });

    requestAnimationFrame(render);
}
render();

// Distortion effect on link hover
const turbulence = { value: 0 };
const tl = gsap.timeline({
    paused: true,
    onStart: () => {
        lineH.style.filter = "url(#filter-noise-x)";
        lineV.style.filter = "url(#filter-noise-y)";
    },
    onUpdate: () => {
        filterX.setAttribute("baseFrequency", turbulence.value);
        filterY.setAttribute("baseFrequency", turbulence.value);
    },
    onComplete: () => {
        lineH.style.filter = lineV.style.filter = "none";
    },
});
tl.to(turbulence, { duration: 0.5, value: 0, startAt: { value: 1 } });

document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => tl.restart());
    link.addEventListener("mouseleave", () => tl.progress(1).kill());
});

// Recalculate on resize
window.addEventListener("resize", () => {
    lineH.style.width = `${window.innerWidth}px`;
    lineV.style.height = `${window.innerHeight}px`;
});
