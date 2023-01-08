let areaTimeMark = document.getElementById('areaTimeMark');

for (let i = 0; i < 60; i++) {
    let timeMark = document.createElement('li');
    timeMark.classList.add('timeMark');
    let melted = (360 / 60) * (i + 1);
    timeMark.style.transform = `rotate(${melted}deg)`;

    let mark = document.createElement('span');

    if((i + 1) % 5 == 0){
        mark.classList.add('mark');
    } else {
        mark.classList.add('intermediateSign');
    }
    

    timeMark.append(mark);
    areaTimeMark.append(timeMark);
}

let seconds = document.querySelector('.areaSecond');
let minutes = document.querySelector('.areaMinute');
let hours = document.querySelector('.areaHour');

let today = new Date();

let sec = today.getSeconds();
let min = today.getMinutes();
let ore = today.getHours();

let timeSeconds = setInterval(() => {
    sec++;

    if (sec != 60) {
        let meltedSeconds = (360 / 60) * sec;
        seconds.style.transform = `rotate(${meltedSeconds}deg)`;
    } else {
        sec = 0;
        seconds.style.transform = `rotate(0deg)`;
        min++;
    }

    if (min != 60) {
        let meltedMinutes = (360 / 60) * min + ((sec / 2) / 5);
        minutes.style.transform = `rotate(${meltedMinutes}deg)`;
    } else {
        min = 0;
        minutes.style.transform = `rotate(0deg)`;
        ore++;
    }

    if (ore <= 24) {
        let meltedHours = (360 / 12) * ore + (min / 2);
        hours.style.transform = `rotate(${meltedHours}deg)`;
    }

}, 1000);
