const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

setInterval(() => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hr.style.transform = `rotate(${hh + mm / 12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;
}, 1000);
