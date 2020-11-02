// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const refs = {
  timerRef: document.querySelector("#timer-1"),
  fieldRef: document.querySelector(".field"),
};

const timer = {
  start() {
    const startTime = new Date("Nov 17, 2020");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockFace(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad (Math.floor((time % (1000 * 60)) / 1000))
  refs.timerRef.textContent = `${days}:${hours}:${mins}:${secs}`
}

function pad(value){
    return String(value).padStart(2, "0")
}
