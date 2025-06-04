const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      display.value = '';
    } else if (value === '⌫') {
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      try {
        display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});


document.addEventListener('keydown', (e) => {
  if ((e.key >= 0 && e.key <= 9) || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    display.value = '';
  }
});
