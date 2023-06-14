let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let started = false;
window.onscroll = () => {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
};

//############

let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .container .number");

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 5000 / goal);
}

// Start Count Down
let countDownDate = new Date("May 31, 2023 23:59:59").getTime();
//console.log(countDownDate);

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  //console.log(days);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //console.log(hours);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  //console.log(minutes);
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
