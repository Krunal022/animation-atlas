document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable, InertiaPlugin)

    Draggable.create(".box", {
        type: "x",
    });
    Draggable.create(".cir", {
        type: "x",
    });
});