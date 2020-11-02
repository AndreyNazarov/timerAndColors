const startRef = document.querySelector('button[ data-action="start"]');
const stopRef = document.querySelector('button[ data-action="stop"]');
const bodyRef = document.querySelector("body");
let timerId = null;
let isActive = false;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let totalColors = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random(totalColors) * (max - min + 1) + min);
};

const colorsSetting = ()=> {
    const randomIndex = randomIntegerFromInterval(0, colors.length);
    bodyRef.style.backgroundColor = colors[randomIndex];
}

const startFn = startRef.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    startRef.disabled = true;
  }
  timerId = setInterval(colorsSetting, 1000);
});

stopRef.addEventListener("click", () => {
  isActive = false;
  clearInterval(timerId);
  console.log("setInterval stopped!");
  startRef.disabled = false;
});
