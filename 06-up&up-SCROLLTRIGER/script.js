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