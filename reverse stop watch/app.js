
                        //    REVERSE STOP WATCH

var hour = document.getElementById("hour")
var mins = document.getElementById("mins")
var secs = document.getElementById("secs")
var ms = document.getElementById("ms")
var myStart = document.getElementById("myStart")
var myStop = document.getElementById("myStop")


var hours = 0;
var minutes = 60;
var seconds = 60;
var milliseconds = 100;
var interval;


function start(){
    interval = setInterval(startTimer, 10)
    myStart.style.display = 'none'
}
start
function startTimer(){
    milliseconds--;
    ms.innerHTML = milliseconds
    if (milliseconds == 0){
        seconds--;
        secs.innerHTML = seconds
        milliseconds = 100
    } else if (seconds == 0){
        minutes--
        mins.innerHTML = minutes
        seconds = 59
    } else if (minutes == 0){
        hours++;
        hour.innerHTML = hours
        minutes = 59
    }
}
function stop() {
    clearInterval(interval)
    myStart.style = 'block'
    
}
function reset (){
    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
hour.innerHTML = seconds
mins.innerHTML = milliseconds
secs.innerHTML = minutes
ms.innerHTML = hours
}