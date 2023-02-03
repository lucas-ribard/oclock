//les variables sont déclaré ici car elle sont utilisé dans presque toute les fonctions
let minutesCHCH;
let secondsCHCH;
let TimerCheck = 1;
let TimerIntervalCH;

document.addEventListener('DOMContentLoaded', (event) => {
    InitChrono();
  })

  function InitChrono() {
    StopChrono();
    Chrono = new Date();
    Chrono.setHours(0, 0, 0, 0);
    minutesCH = Chrono.getMinutes();
    secondsCH = Chrono.getSeconds();

    timeValue = ((minutesCH < 10) ? "0" : "") + minutesCH;
    timeValue += ((secondsCH < 10) ? ":0" : ":") + secondsCH;
    
    document.getElementById("Chrono").innerHTML = timeValue;
}

function RunChrono(){
    secondsCH++
    timeValue = ((minutesCH < 10) ? "0" : "") + minutesCH;
    timeValue += ((secondsCH < 10) ? ":0" : ":") + secondsCH;
    document.getElementById("Chrono").innerHTML = timeValue;
}

// Bouton Start Stop
function StartChrono(){
    if (TimerCheck == 0){
        TimerIntervalCH = setInterval(RunChrono,1000);
        TimerCheck=1;
    }else{
        StopChrono();
    }
    
}

function StopChrono(){
    clearInterval(TimerIntervalCH);
    TimerCheck=0;
}

