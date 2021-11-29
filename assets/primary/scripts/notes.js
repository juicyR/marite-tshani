let splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.style.opacity = '0';
        splash.style.zIndex = '-100';
    }, 5000);
})

document.onclick = function() {
    splash.style.opacity = '0';
    splash.style.zIndex = '-100';
}