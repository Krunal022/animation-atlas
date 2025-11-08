document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable, InertiaPlugin)

    Draggable.create(".box", {
        type: "x,y",
        bounds: ".left"
    });

    Draggable.create(".cir", {
        type: "x,y",
        inertia: true,
        bounds: ".right"
    });

    Draggable.create(".star", {
        type: "rotation",
        inertia: true,
        bounds: ".right"
    });

    Draggable.create(".hexagon", {
        type: "y",
        inertia: true,
        bounds: ".left"
    });

});