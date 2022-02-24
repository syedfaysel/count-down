const countdown = () => {
    const countDate = new Date('June 28,2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //calculate how the time is work

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    
    //calculate the time 
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor(gap%day/hour);
    const textMin = Math.floor(gap%hour/minute);
    const textSec = Math.floor(gap%minute/second);
    console.log(countDate);
    console.log(textDay,textHour,textMin,textSec);

    //setting to inner text
    document.getElementById('day').innerText = textDay;
    document.getElementById('hour').innerText = textHour;
    document.getElementById('minute').innerText = textMin;
    document.getElementById('second').innerText = textSec;
}

setInterval(countdown, 1000);