const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// createTimerAnimator анимирует timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    setInterval(() => {

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

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
