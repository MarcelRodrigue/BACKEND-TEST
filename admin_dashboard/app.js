const sideBar = document.querySelector(".aside");
const closeBtn = document.querySelector("#close");
const menuBtn = document.querySelector("#menu");
const themeTogle = document.querySelector(".theme_togle");
const activeLinks = document.querySelector(".links");


menuBtn.addEventListener('click', () =>{
    sideBar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideBar.style.display = 'none';
})

themeTogle.addEventListener('click', ()=>{
    document.body.classList.toggle('darktheme_variables');


    themeTogle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeTogle.querySelector('span:nth-child(2)').classList.toggle('active');


})

activeLink.addEventListener('click', ()=>{
activeLinks.classList.toggle('active');

})