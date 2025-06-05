console.log("test");


// console.log(`hour: ${hours} minutes ${seconds} seconds ${seconds}`);
setInterval(calcRotation, 1000);
// let rotate = document.getElementById("minute");
// rotate.style.transform = 'rotate(90deg)';
// calcRotation()
function calcRotation(){
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours > 12){
        hours = hours - 12;
    }
    let h = document.getElementById("hour");
    let m = document.getElementById("minute");
    let s = document.getElementById("seconds");

    let hourDegree = `rotate(${(hours*30)+(minutes/2)}deg)`;
    let minutesDegree = `rotate(${minutes*6 + (seconds/10)}deg)`;
    let secondsDegree = `rotate(${seconds*6}deg)`;

    // console.log(typeof(hourDegree) + "hour degree; " + hourDegree);
    h.style.transform = hourDegree;
    m.style.transform = minutesDegree;
    s.style.transform = secondsDegree;
}

