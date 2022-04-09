const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navbar')

var links = document.querySelectorAll('.nav-link')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
})

links.forEach(link=>{
    link.addEventListener('click', function(e){
        removeActive()
        toggle.classList.remove('active')
        nav.classList.remove('active')
        this.classList.add('active')
    })
})

function removeActive(){
    links.forEach(link =>{
        link.classList.remove('active')
    })
}