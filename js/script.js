const xMark = document.getElementById("x-mark")
//     menu.classList.toggle("d-none")
const show = document.getElementById('menu-show')
console.log(show)

const bgMenu = document.getElementById('bg-menu')
console.log(bgMenu)
document.getElementById('menu-show').addEventListener("click",()=>{
    const menu = document.getElementById("menu-main")
    bgMenu.style.background = "rgba(217, 217, 217, 0.3)"
    bgMenu.style.backdropFilter = "blur(50px)"
    // backdrop-filter: blur(50px);
    show.classList.add("d-none")
    xMark.classList.remove("d-none")
    menu.classList.remove("d-none")
})

document.getElementById('x-mark').addEventListener("click",()=>{
    const menu = document.getElementById("menu-main")
    bgMenu.style.background = "transparent"
    bgMenu.style.backdropFilter = "unset"

    bgMenu.style.backdropFilter = "blur(50px)"
    show.classList.remove("d-none")
    xMark.classList.add("d-none")
    menu.classList.add("d-none")
})