let cir = document.querySelector(".main .cir");
let main = document.querySelector(".main");
let heading = document.querySelector(".heading")
main.addEventListener("mousemove", (dets) => {
    cir.style.left = dets.clientX + "px"
    cir.style.top = dets.clientY + "px"
})

heading.addEventListener("mouseenter", () => {
    cir.style.scale = 4
})
heading.addEventListener("mouseleave", () => {
    cir.style.scale = 1
})

let lineX = document.querySelector(".line-x")
let lineY = document.querySelector(".line-y")

main.addEventListener("mousemove",(det)=>{
    lineX.style.top = det.clientY + "px"
    lineY.style.left = det.clientX + "px"
})