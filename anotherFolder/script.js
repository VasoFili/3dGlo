'use strict';

let date = new Date();

let timeOfDay;
let hours = date.getHours();

let day = date.getDay();
let dayOfWeek;

let time = date.toLocaleTimeString('en');

let dayNY;

let getTimeOfDay = function () {
  if (hours >= 0 && hours < 4) {
    timeOfDay = 'Доброй ночи'
  } else if (hours >= 4 && hours < 12) {
    timeOfDay = 'Доброе утро'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Добрый день'
  } else {
    timeOfDay = 'Добрый вечер'
  }
};
getTimeOfDay();

let getDayOfWeek = function () {
  if (day === 0) {
    dayOfWeek = 'понедельник'
  } else if (day === 1) {
    dayOfWeek = 'вторник'
  } else if (day === 2) {
    dayOfWeek = 'среда'
  } else if (day === 3) {
    dayOfWeek = 'четверг'
  } else if (day === 4) {
    dayOfWeek = 'пятница'
  } else if (day === 5) {
    dayOfWeek = 'суббота'
  } else if (day === 6) {
    dayOfWeek = 'воскресенье'
  }
};
getDayOfWeek();

function getDayTillNY() {
  let dateStop = new Date('31 december 2020').getTime();
  let dateNow = new Date().getTime();
  let timeRemining = (dateStop - dateNow) / 1000;
  dayNY = Math.floor(timeRemining / 60 / 60 / 24);
  console.log(dayNY);
};
getDayTillNY();

let block = document.createElement("h3")
block.innerHTML = `<h4>${timeOfDay}</h4>
<h4>Сегодня: ${dayOfWeek}</h4>
<h4>Текущее время: ${time}</h4>
<h4>До нового года осталось ${dayNY} дней</h4>`
document.body.append(block);



console.log(date.getTime());

// Добрый день(утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время: 12: 05: 15 PM
// До нового года осталось 175 дней