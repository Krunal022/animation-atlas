VANTA.CLOUDS({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

// tween example with GSAP
let tween = gsap.to(".flair", {
    duration: 2,
    x: () => 100,
    rotation: 360,
    ease: "none",
    paused: true
});

// Button event listeners for controlling the animation
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

// Block certain keyboard shortcuts and context menu
(function () {
    function isEditable(el) {
        if (!el) return false;
        const tag = el.tagName;
        if (!tag) return false;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
        if (el.isContentEditable) return true;
        return false;
    }

    document.addEventListener('keydown', function (e) {
        const active = document.activeElement;
        if (isEditable(active)) return; // allow shortcuts in input fields

        const key = (e.key || '').toLowerCase();
        const ctrlOrMeta = e.ctrlKey || e.metaKey;

        if (e.key === 'F12' || key === 'f12') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (ctrlOrMeta) {
            if (key === 'j' || key === 'u' || key === 's' || key === 'p' || key === 'i') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }

        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
            if (key === 'i' || key === 'j' || key === 'c') {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    }, true);

    // disable contextmenu except on editable elements
    document.addEventListener('contextmenu', function (e) {
        if (isEditable(e.target)) return; // allow right-click in inputs
        e.preventDefault();
    }, true);
})();

