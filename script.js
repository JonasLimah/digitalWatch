


function getHours(){
    let d = new Date();
    let hora = d.getHours()
    let minutos = d.getMinutes()
    let segundos = d.getSeconds()

    document.querySelector(".horas").innerHTML = hora + ":";
    document.querySelector(".minutos").innerHTML = minutos + ":";
    document.querySelector(".segundos").innerHTML = segundos ;

    if (hora < 10){
        document.querySelector(".horas").innerHTML ="0" + hora;
    }
    if (minutos < 10){
        document.querySelector(".minutos").innerHTML ="0" + minutos + ":";
    }
    if (segundos < 10){
        document.querySelector(".segundos").innerHTML ="0" + segundos;
    }
}

let time;




document.querySelector("#start").addEventListener("click",()=>{
    time = setInterval(getHours,1000)
})
document.querySelector("#stop").addEventListener("click", () =>{
    clearInterval(time)
})