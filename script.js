let menuVisible = false;
//Función para ocultar o mostrar el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false; 
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu cuando selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion para aplicar animación a las habilidades
function efectoSkills(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("ruby");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoEnEquipo");
        habilidades[8].classList.add("responsabilidad");
        habilidades[9].classList.add("autonomia");
        habilidades[10].classList.add("decision");
        habilidades[11].classList.add("resolucion");
    } 
}

window.onscroll = function(){
    efectoSkills();
}