document.addEventListener("DOMContentLoaded", function(){
    //Fecha Boda
    function actualizarContador(){
        const fechaBoda = new Date("2026-04-11T12:00:00").getTime();
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        if (diferencia <= 0) {
            document.getElementById("contador").innerHTML = "¡Es el gran día! 🎉";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = 
            `${dias} días, ${horas}h ${minutos}m ${segundos}s`;

        setTimeout(actualizarContador, 1000);
    }

    actualizarContador();
})