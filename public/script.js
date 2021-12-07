const menu = document.querySelector('#menu')
const menus = document.querySelector('#menus')

menu.addEventListener('click', ()=>{
    menus.classList.toggle('hidden')
})