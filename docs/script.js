document.addEventListener("DOMContentLoaded", function(){
    //Fecha Boda
    const fechaBoda =  new Date("2026-04-11T12:00:00");
    const hoy = new Date();

    //Calcula la diferencia en dias
    const diferenciaTiempo = fechaBoda -hoy;
    const diasFaltan = Math.ceil(diferenciaTiempo/(1000*60*60*24));
    
    //Muestra el contador en la pagina
    document.getElementById("contador").textContent = diasFaltan;
})
