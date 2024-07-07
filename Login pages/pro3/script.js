const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const resgiterlink=document.querySelector('.reg-link');
const btnlogin=document.querySelector('.btnlogin');
const iconclose=document.querySelector('.close');

resgiterlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});
btnlogin.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});