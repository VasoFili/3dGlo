window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // timer
  const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSecond = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemining = (dateStop - dateNow) / 1000;
      let seconds = Math.floor(timeRemining % 60);
      let minutes = Math.floor((timeRemining / 60) % 60);
      let hours = Math.floor(timeRemining / 60 / 60);
      return {
        timeRemining,
        hours,
        minutes,
        seconds
      };
    };

    function updateClock() {
      let timer = getTimeRemaining();

      if (timer.hours < 10) {
        timerHours.textContent = '0' + timer.hours;
      } else {
        timerHours.textContent = timer.hours;
      }
      if (timer.minutes < 10) {
        timerMinutes.textContent = '0' + timer.minutes;
      } else {
        timerMinutes.textContent = timer.minutes;
      }
      if (timer.seconds < 10) {
        timerSecond.textContent = '0' + timer.seconds;
      } else {
        timerSecond.textContent = timer.seconds;
      }

      if (timer.timeRemining < 0) {
        clearInterval(idIn);
      }

      if (timer.timeRemining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSecond.textContent = '00';
      }
    }

    let idIn = setInterval(updateClock, 1000);
  }
  countTimer('15 September 2020');

  // menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

  };
  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup');
    const popUpBtn = document.querySelectorAll('.popup-btn');
    const popUpClose = document.querySelector('.popup-close');

    popUpBtn.forEach((elem => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
      });
    }));
    popUpClose.addEventListener('click', () => {
      popUp.style.display = 'none';
    })
  }
  togglePopUp();


});