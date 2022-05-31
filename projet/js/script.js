document.querySelector("#menu").addEventListener('click', openMenu)


 function openMenu(){
     document.getElementById("dropdown").classList.toggle("active");
 }

const menu= document.querySelector('.humburger');
const navbar = document.querySelector('.menu-ctn');
    menu.addEventListener('click', () =>{
        navbar.classList.toggle('change');
    })
