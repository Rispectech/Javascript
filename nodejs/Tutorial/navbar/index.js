const Navbutton  = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

Navbutton.addEventListener('click',()=>{
    if(links.classList.contains('show-links'))
    {
        links.classList.remove('show-links')
    }
    else
    links.classList.add('show-links')
})