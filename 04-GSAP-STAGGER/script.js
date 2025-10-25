document.addEventListener("DOMContentLoaded", (event) => {

    gsap.to('.txt', {
        opacity: 1,
        stagger: {
            grid: [7, 15],
            from: "random",
            amount: 1
        },
        duration: 1.5,
        filter: "blur(0)",
    })
    gsap.to('.container h1', {
        filter: "blur(0)",
        opacity: 1,
        duration: .5
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