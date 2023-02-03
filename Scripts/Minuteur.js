//les variables sont déclaré ici car elle sont utilisé dans presque toute les fonctions
let minutes;
let seconds;
let timeValue;
let TimerInterval;

//attend que la page html soit chargé sinon il ne trouve pas "minuteur", le <p> dans lequel il doit écrire
document.addEventListener('DOMContentLoaded', (event) => {
    InitMinuteur();
  })

//initialise le minuteur pour que le minuteur affiche 0 , et stop le compteur / est exécuté automatiquement une fois le html chargé, mais sert aussi pour reset le compteur
function InitMinuteur() {
    StopMinuteur();
    Minuteur = new Date();
    Minuteur.setHours(0, 0, 0, 0);
    minutes = Minuteur.getMinutes();
    seconds = Minuteur.getSeconds();

    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
   
    document.getElementById("minuteur").innerHTML = timeValue;
}

//le minuteur , affiche le temps restant, a chaque execution il retire une seconde au minuteur, si il arrive a 0 affiche une pop up
function runMinuteur(){
    if(minutes<=0 && seconds<=0){
        alert("Le Minuteur est arrivé à 0");
        StopMinuteur();

    }else if(seconds <= 0){
        minutes=minutes-1;
        seconds=59;

    }else{seconds = seconds-1;}
    
    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("minuteur").innerHTML = timeValue;
}

//ajoute aux minuteur une minute
function AddMinute() {
    minutes++;
    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("minuteur").innerHTML = timeValue;
}

//ajoute aux minuteur une seconde
function AddSeconds() {
    if(seconds == 59){
        minutes++;
        seconds=0;
    }else{
        seconds++;}
    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("minuteur").innerHTML = timeValue;
}

//réduit le minuteur d'une minute
function SubMinute() {
    if(minutes <= 0){
        InitMinuteur();
    }else{
        minutes=minutes-1;
    }
    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("minuteur").innerHTML = timeValue;
}

//réduit le minuteur d'une seconde
function SubSeconds() {
    if(seconds <= 0 && minutes >= 1){
        minutes=minutes-1;
        seconds=59;

    }else if(seconds <= 0 && minutes <= 0){
        InitMinuteur();
    }
    else{
        seconds=seconds-1;
    }

    timeValue = ((minutes < 10) ? "0" : "") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("minuteur").innerHTML = timeValue;
}

//démare le décompte
function StartMinuteur(){
    TimerInterval = setInterval(runMinuteur,1000);
}

//stope le décompte
function StopMinuteur(){
    clearInterval(TimerInterval);
}

  