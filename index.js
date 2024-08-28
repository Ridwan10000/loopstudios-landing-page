let hamburger = document.querySelector('nav > ul li')
let close = document.querySelector('.mobile-menue ul div > li:nth-child(2)');
hamburger.addEventListener('click',()=>{
    document.querySelector('.mobile-menue').classList.add('active');
})
close.addEventListener('click',()=>{
    document.querySelector('.mobile-menue').classList.remove('active')
})