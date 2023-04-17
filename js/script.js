const xMark = document.getElementById("x-mark")
//     menu.classList.toggle("d-none")
const show = document.getElementById('menu-show')
const login = document.getElementById('login')
const resMenu = document.querySelector(".menu")
console.log(resMenu)

const bgMenu = document.getElementById('bg-menu')
document.getElementById('menu-show').addEventListener("click",()=>{
    const menu = document.getElementById("menu-main")
    show.classList.add("d-none")
    xMark.classList.remove("d-none")
    menu.style.left ="50%"
    menu.style.transform = ' translateX(-50%)';
    // menu.style.background = "rgba(217, 217, 217, 0.3)"
    // menu.style.backdropFilter = "blur(50px)"
    // menu.classList.remove("d-none")
})

document.getElementById('x-mark').addEventListener("click",()=>{
    const menu = document.getElementById("menu-main")
    bgMenu.style.backdropFilter = "blur(50px)"
    show.classList.remove("d-none")
    xMark.classList.add("d-none")
    menu.style.left = "-800px";
    // menu.style.background = "rgba(217, 217, 217, 0.3)"
    // menu.style.backdropFilter = "blur(50px)"
    // menu.classList.add("d-none")
})

// login
document.getElementById("btn-x").addEventListener("click",()=>{
    login.classList.add("d-none")
})

const loginPop = () =>{
    login.classList.remove("d-none")
}

// mb login
const mbLogin = document.getElementById('mb-login')

const menu = document.getElementById("bg-menu")
const loginPopMb = () =>{
    mbLogin.style.top = "0";
    menu.style.width ="100%"
    menu.classList.add("d-none");
}


document.getElementById("mb-xm-mark").addEventListener("click",()=>{
    mbLogin.style.top = "-400px"
    menu.classList.remove("d-none")
    
})


const lgForm = document.getElementById('lg-form');
const result = document.getElementById('result');

lgForm.addEventListener('submit', (event) => {
  const email = lgForm.email.value;

  if (validateEmail(email)) {
    result.innerHTML = ' ';
  } else {
    result.innerHTML = 'Invalid email';
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}