// page loading animation 
window.addEventListener("load", function(){
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
});

const countdown = () => {
    // launch time 
    const endDate = new Date("Mar 31, 2022 00:00:00").getTime();
    // present date 
    const now = new Date().getTime();
    const diff = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(diff / days);
    let timeHours = Math.floor((diff % days) / hours);
    let timeMinutes = Math.floor((diff % hours) / minutes);
    let timeSeconds = Math.floor((diff % minutes) / seconds);

    timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
    timeHours = timeHours < 00 ? timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
    timeMinutes = timeMinutes < 00 ? timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;
    timeSeconds = timeSeconds < 00 ? timeSeconds : timeSeconds;

    const daysFlip = document.querySelectorAll('[data-group="days"]');
    const hoursFlip = document.querySelectorAll('[data-group="hours"]');
    const minutesFlip = document.querySelectorAll('[data-group="minutes"]');
    const secondsFlip = document.querySelectorAll('[data-group="seconds"]');

    daysFlip.forEach(elem => {
        timeHours == 00
            ? (elem.parentElement.parentElement.classList.add('play'), elem.parentElement.parentElement.classList.remove('play'))
            : elem.parentElement.parentElement.classList.remove('play');

        elem.innerHTML = timeDays;
    });

    hoursFlip.forEach(elem => {
        timeMinutes == 00
            ? elem.parentElement.parentElement.classList.add('play')
            : elem.parentElement.parentElement.classList.remove('play');

        elem.innerHTML = timeHours;
    });

    minutesFlip.forEach(elem => {
        timeSeconds == 00
            ? elem.parentElement.parentElement.classList.add('play')
            : elem.parentElement.parentElement.classList.remove('play');
        
        elem.innerHTML = timeMinutes;
    }); 

    secondsFlip.forEach(elem => {
        elem.innerHTML = timeSeconds;
    });
}

setInterval(countdown, 1000);
