window.onload = function () {
    var hrs = document.getElementById("hrs");
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");
    var millsecs = document.getElementById("millsecs");

    var btnstart = document.getElementById("start");
    var btnlap = document.getElementById("lap");
    var btnstop = document.getElementById("stop");
    var btnreset = document.getElementById("reset");

    var laps = document.getElementById("laps"); 
    var lap_control = document.getElementById("lap_control");

    hrs.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
    millsecs.innerHTML = "00";

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;

    var interval;       //The the interval id


    btnstart.onclick = function() {
        clearInterval(interval);
        setTimeout(function(){interval = setInterval(step, 10);}, milliseconds % 10); //When stoped inbetween intervals
    }

    btnlap.onclick = function() {
        laps.style.visibility = "visible";
        laps.innerHTML = laps.innerHTML+"<p style='font-size: calc(0.75vw + 18px)'>"+hrs.innerHTML+" : "+mins.innerHTML+" : "+secs.innerHTML+"<span style='font-size: calc(0.75vw + 12px)'> "+millsecs.innerHTML+"</span></p>";
        lap_control.innerHTML = "<input id='clear' type='button'  value='CLEAR'></input>";

        var btnclear = document.getElementById("clear");

        btnclear.onclick = function() {
            laps.style.background = "";
            laps.innerHTML = "";
            lap_control.innerHTML = "";
            laps.style.visibility = "hidden";
        }
    }

    btnstop.onclick = function() {
        clearInterval(interval);
    }

    btnreset.onclick = function(){
        clearInterval(interval);

        hrs.innerHTML = "00";
        mins.innerHTML = "00";
        secs.innerHTML = "00";
        millsecs.innerHTML = "00";

        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0; 

        laps.style.background = "";
        laps.innerHTML = "";
        lap_control.innerHTML = "";
        laps.style.visibility = "hidden";
    }

    function step() {
        milliseconds++;

        if(milliseconds <= 9) {
            millsecs.innerHTML = "0" + milliseconds;
        }
        else if (milliseconds < 99) {
            millsecs.innerHTML = milliseconds;
        }
        else {
            seconds++;
            milliseconds = 0;
            millsecs.innerHTML = "00";
        }

        if(seconds <= 9) {
            secs.innerHTML = "0" + seconds;
        }
        else if (seconds < 60) {
            secs.innerHTML = seconds;
        }
        else {
            minutes++;
            seconds = 0;
            secs.innerHTML = "00";
        }

        if(minutes <= 9){
            mins.innerHTML = "0" + minutes;
        }
        else if (minutes < 60) {
            mins.innerHTML = minutes;
        }
        else {
            hours++;
            minutes = 0;
            mins.innerHTML = "00";
        }

        if (hours <= 9) {
            hrs.innerHTML = "0" + hours;
        }
        else {
            hrs.innerHTML = hours;
        }
    }
}