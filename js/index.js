const contendor= document.querySelector('#contendor');
document.querySelector('#bottom-menu').addEventListener('click', ()=>{
    contendor.classList.toggle('active');
});

const comprobarAncho= ( )=> {
    if(window.innerWidth<=768){
        contendor.classList.remove('active');
    }else{
        contendor.classList.add('active');
}
};
comprobarAncho();

window.addEventListener('resize',()=>{
    comprobarAncho();
});