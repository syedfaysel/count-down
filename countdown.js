const countdown = () => {
    const countDate = new Date('Aug 22,2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //calculate how the time is work

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    

    let textDay = 0;
    var textHour = 0;
    let textMin = 0;
    let textSec = 0;
   
    //calculate the time 
    if(gap>=0){
        textDay = Math.floor(gap/day);
        textHour = Math.floor(gap%day/hour);
        textMin = Math.floor(gap%hour/minute);
        textSec = Math.floor(gap%minute/second);
        console.log(countDate);
        console.log(textDay,textHour,textMin,textSec);
    }


    //setting to inner text
    document.getElementById('day').innerText = textDay;
    document.getElementById('hour').innerText = textHour;
    document.getElementById('minute').innerText = textMin;
    document.getElementById('second').innerText = textSec;
}

setInterval(countdown, 1000);