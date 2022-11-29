const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Ставим ограничение таймера в 1 сутки
const MAX_TIMER_VALUE = 86400;
const TICK = 1000;
let intervalId;

// createTimerAnimator анимирует timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds > MAX_TIMER_VALUE ? MAX_TIMER_VALUE : seconds;

    intervalId = setInterval(() => {
      const date = new Date(remainingSeconds * 1000);
      const hours = ('0' + date.getUTCHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);
      const countdown = `${hours}:${minutes}:${seconds}`;

      timerEl.innerHTML = '';
      timerEl.append(countdown);

      if (remainingSeconds === 0) {
        return;
      }

      remainingSeconds -= 1;
    }, TICK);
  };
};

const animateTimer = createTimerAnimator();

const deleteNonNumericChars = string => string.split('').filter(item => /^[0-9]$/.test(item)).join('');

inputEl.addEventListener('input', () => {
  // Очищаем input так, чтобы в значении оставались только числа
  inputEl.value = deleteNonNumericChars(inputEl.value);
});

buttonEl.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
