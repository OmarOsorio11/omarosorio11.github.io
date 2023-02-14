function changeimage() {
    var srcname = document.getElementById("img_change").src;
    var num = parseInt(srcname.substring(34, 35));
    if (num > 3) {
        document.getElementById("img_change").src = "sources/img/1.png"
    } else {
        num = num + 1;
        srcname = "sources/img/" + num.toString() + ".png";
        document.getElementById("img_change").src = srcname
    }
}
/*
document.getElementById("m-buton").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("show");
});

*/
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});


let ubicacionPrincipal=window.pageXOffset;
window.onscroll=function(){
    
    document.querySelector(".nav-menu").classList.remove("show");
    let desplazamiento = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamiento ){
        document.querySelector(".nav-main").style.top ="0"
    } else {
        document.querySelector(".nav-main").style.top = "-100px"
    }
    ubicacionPrincipal=desplazamiento;
}