var animation1 = gsap.from("nav", {
    duration: 1,
    y: () => -100,
    opacity: 0,
    ease: "bounce.out",
    delay: 1.5,
});
var animation2 = gsap.from(".content .f", {
    duration: 1,
    x: 300,
    opacity: 0,
    ease: "power2.out",
    delay: 2.5
});
var animation3 = gsap.from(".box", {
    duration: 1,
    x: -300,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2,
    delay: 2.5
});
var animation4 = gsap.from(".content .t", {
    duration: 1,
    x: 300,
    opacity: 0,
    ease: "power2.out",
    delay: 2.5
});
var animation5 = gsap.from("footer", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "bounce.out",
    delay: 2.8
});
gsap.fromTo("button", {
    duration: .5,
    scale: 0,
    opacity: 0,
}, {
    scale: 1,
    ease: "power2.out",
    opacity: 1,
    delay: 2,
    duration: 2,
})

document.querySelector("#restart").onclick = () => {
    animation1.restart();
    animation2.restart();
    animation3.restart();
    animation4.restart();
    animation5.restart();
};

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

