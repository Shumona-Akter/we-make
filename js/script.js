const xMark = document.getElementById("x-mark")
const show = document.getElementById('menu-show')
const login = document.getElementById('login')
const resMenu = document.querySelector(".menu")
console.log(resMenu)


// login
document.getElementById("btn-x").addEventListener("click",()=>{
    login.classList.add("d-none")
})

const loginPop = () =>{
    login.classList.remove("d-none")
}

// mb login
const mbLogin = document.getElementById('mb-login')
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


// mb

const menuBtn = document.querySelector('.sprig');
const mobileMenu = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('is-active');
  mbLogin.classList.toggle('mb-log');
});