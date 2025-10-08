document.addEventListener("DOMContentLoaded", (event) => {

    var timeline = gsap.timeline()

    timeline.to("#img1", {
        height: 0,
        duration: .7
    })
    timeline.to("#img2", {
        height: 0,
        duration: .7
    }, "same")
    timeline.to("#img3", {
        height: 0,
        duration: .7
    }, "ok")
    timeline.to("#img4", {
        height: 0,
        duration: .7
    })
    timeline.from('.animation-page h1', {
        duration: .4,
        opacity: 0,
    }, "same")
    timeline.from('p', {
        duration: .4,
        opacity: 0,
        // stagger:2
    }, "ok")
    timeline.to(".animation-page", {
        opacity: 0,
        duration: .5,
        display: "none"
    })

    document.querySelector("#btn").addEventListener("click", () => {
        timeline.restart();
    })
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