document.addEventListener('DOMContentLoaded', (event) => {
  //exec runclock chaque secondes
  let timerID = setInterval(runClock,1000);
  
})


function runClock(){
    let today   = new Date();
    let hours   = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let timeValue = hours;
    let dateValue = today.toLocaleDateString();
 
    // Si le nombre de minutes est inférieur à 10, alors on ajoute un 0 devant sinon ca donne (10h2 plutot que 10h02)
   
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("time").innerHTML = timeValue;
    document.getElementById("date").innerHTML = dateValue;
  }


