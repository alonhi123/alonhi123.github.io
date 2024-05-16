const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const startDate = new Date(document.querySelector('#date').value);
  const operation = document.querySelector('#operation').value;
  const value = parseInt(document.querySelector('#value').value);
  const unit = document.querySelector('#unit').value;

  let result;
  switch (unit) {
    case 'days':
      result = operation === 'add' ? new Date(startDate.getTime() + value * 24 * 60 * 60 * 1000) : new Date(startDate.getTime() - value * 24 * 60 * 60 * 1000);
      break;
    case 'months':
      result = operation === 'add' ? new Date(startDate.setMonth(startDate.getMonth() + value)) : new Date(startDate.setMonth(startDate.getMonth() - value));
      break;
    case 'years':
      result = operation === 'add' ? new Date(startDate.setFullYear(startDate.getFullYear() + value)) : new Date(startDate.setFullYear(startDate.getFullYear() - value));
      break;
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  resultDiv.innerHTML = `Результат: ${result.toLocaleString('ru-RU', options)}`;
});