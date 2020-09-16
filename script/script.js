window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Timer
  function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSecond = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemining % 60),
        minutes = Math.floor((timeRemining / 60) % 60),
        hours = Math.floor(timeRemining / 60 / 60);
      return {
        timeRemining,
        hours,
        minutes,
        seconds
      };
    };

    function updateClock() {

      const timer = getTimeRemaining();

      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSecond.textContent = addZero(timer.seconds);


      if (timer.timeRemining < 0) {
        clearInterval(idIn);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSecond.textContent = '00';
      }
    }
    const addZero = n => n < 10 ? '0' + n : n;
    const idIn = setInterval(updateClock, 1000);
  }

  countTimer('17 September 2020');

});