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

document.getElementById("m-buton").addEventListener("click", () => {
    document.getElementById("m-buton").classList.toggle("show");
});


/*function sendMail() {

    var nombre = document.getElementById("f-name").value;
    var mail = document.getElementById("f-mail").value;
    var text = document.getElementById("f-message").value;
    //Remplazando espacios por %20
    text.trim()
    nombre.trim()

    var buscar = " ";
    nombre = nombre.replace(new RegExp(buscar, "g"), "%20")
    text = text.replace(new RegExp(buscar, "g"), "%20")
    //console.log(text)
    var source = "mailto:omarosorio489@gmail.com?subject=nombre%20" + nombre + "&body=" + text + "%20"
    //console.log(source)
    document.getElementById("mailto").src = source
//mailto:me@leonidasesteban.com?subject=nombre%20omar%20&body=oasasas%20osasaso%20
    console.log(document.getElementById("mailto").src)
    document.getElementById("mailto").click()
}*/

