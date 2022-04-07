var start = document.getElementById("start");
var stop =  document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");


var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

var startTimer;

var workMinus = document.getElementById("work-minus");
var workPlus = document.getElementById("work-plus");
var breakPlus = document.getElementById("break-plus");
var breakMinus = document.getElementById("break-minus");



start.addEventListener('click', function(){
    (startTimer === undefined)? startTimer= setInterval( timer, 1000): alert("Timer is already running")


})
reset.addEventListener('click', function(){
    wm.innerText =25;
    ws.innerText ="00";
    bm.innerText =5;
    bs.innerText ="00";
    stopInterval()
    
})

stop.addEventListener('click', function(){
    stopInterval()

})


function timer() {
    if(ws.innerText !=0) ws.innerText--;
    else if(wm.innerText !=0 && ws.innerText ==0){
        ws.innerText= 59;
        wm.innerText--;
    }
    if (wm.innerText ==0 && ws.innerText ==0){
        if(bs.innerText !=0) bs.innerText--;
        else if(bm.innerText !=0 && bs.innerText ==0){
            bs.innerText= 59;
            bm.innerText--;
        }   
    }
    if (wm.innerText ==0 && ws.innerText ==0 && bm.innerText ==0 && bs.innerText ==0){

        wm.innerText =25;
        ws.innerText ="00";
        bm.innerText =5;
        bs.innerText ="00";
        stopInterval()
    }
}
function stopInterval(){
    clearInterval(startTimer)
    startTimer = undefined;
}
workMinus.addEventListener('click', function(){

    wm.innerText--;
    stopInterval()
    //if (wm.innerText <15) alert("Not recommended, too short")

})
workPlus.addEventListener('click', function(){

    wm.innerText++;
    stopInterval()
    if (wm.innerText >45) alert("Not recommended ")

})
breakMinus.addEventListener('click', function(){

    bm.innerText--;
    stopInterval()
    if (bm.innerText <3) alert("Not recommended, too short")

})
breakPlus.addEventListener('click', function(){

    bm.innerText++;
    stopInterval()
    if (bm.innerText >10) alert("Not recommended ")

})