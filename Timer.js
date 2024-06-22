

let timerinterval;
let timervalue=0;
let running= false;

function starttimer(){
    if(!running){
    running=true;
    timerinterval=setInterval(updateTimer, 1000);
    }
}

function stoptimer(){
    if(running){
        running=false;
        clearInterval(timerinterval);
    }
}

function resettimer(){
    stoptimer();
    timervalue=0;
    updatDisplay();
}

setInterval(function(){
    alert("you want to eat")
},10000)


function updateTimer(){
    timervalue++;
    updatDisplay();
}

function updatDisplay(){
    const hours=Math.floor(timervalue / 3600);
    const minutes=Math.floor((timervalue % 3600) / 60);
    const seconds=timervalue % 60;
    const formattedTime=hours+":"+minutes+":"+seconds;

    document.getElementById("timer").textContent=formattedTime;
}
