document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce)


    CustomBounce.create("myBounce", { strength: 0.5, squash: 1 });


    gsap.from(".st", {
        x: -500,
        ease: "myBounce",
        duration: 1 //<-- easy!
    })
    gsap.from(".nd", {
        x: -500,
        ease: "myBounce",
        duration: 1 //<-- easy!
    })
    gsap.from(".right-img img", {
        x: 500,
        ease: "myBounce",
        duration: 1 //<-- easy!
    })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "hero-image-div",
            start: "70% 50%",
            end: "90% 50%",
            // markers: true,
            scrub: 2,
            pin: true
        }
    }).to(".center-img video", {
        scale: 1.6
        ,
    }, "a").to(".st", {
        x: -300,
    }, "a").to(".nd", {
        x: -300,
    }, "a").to(".right-img img", {
        x: 200,
        y: 60
    }, "a")
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