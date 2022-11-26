const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let interval;

// createTimerAnimator анимирует timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    interval = setInterval(() => {

    const countdown = new Date(remainingSeconds * 1000).toISOString().substr(11, 8);
      timerEl.innerHTML = '';
      timerEl.append(countdown);

      if (remainingSeconds === 0) {
        return;
      }

      remainingSeconds -= 1;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

const deleteNonNumericChars = string => string.split('').filter(item => /^[0-9]$/.test(item)).join('');

inputEl.addEventListener('input', () => {
  // Очищаем input так, чтобы в значении оставались только числа
  inputEl.value = deleteNonNumericChars(inputEl.value);
});

buttonEl.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval)
  }

  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
