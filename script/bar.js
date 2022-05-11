function barFunc(rotate){
    let menu = document.querySelector('.nav-container');
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
    rotate.classList.toggle("change")
}