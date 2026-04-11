const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

const API_URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

/**
 * Функция для отрисовки списка валют на странице
 * @param {Object} valutes
 */
function renderValutes(valutes) {

  itemsContainer.innerHTML = '';

  for (let key in valutes) {
    const valute = valutes[key];

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const codeDiv = document.createElement('div');
    codeDiv.classList.add('item__code');
    codeDiv.textContent = valute.CharCode;


    const valueDiv = document.createElement('div');
    valueDiv.classList.add('item__value');
    valueDiv.textContent = valute.Value;

    const currencyDiv = document.createElement('div');
    currencyDiv.classList.add('item__currency');
    currencyDiv.textContent = 'руб.';

    itemDiv.appendChild(codeDiv);
    itemDiv.appendChild(valueDiv);
    itemDiv.appendChild(currencyDiv);

    itemsContainer.appendChild(itemDiv);
  }
}

const cachedData = localStorage.getItem('currency_courses');
if (cachedData) {

  const parsedData = JSON.parse(cachedData);
  renderValutes(parsedData);
}

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Сетевая ошибка');
    }
    return response.json();
  })
  .then(data => {
    const valutes = data.response.Valute;

    localStorage.setItem('currency_courses', JSON.stringify(valutes));

    renderValutes(valutes);
  })
  .catch(error => {
    console.error('Произошла ошибка при загрузке курса валют:', error);
  })
  .finally(() => {

    loader.classList.remove('loader_active');
  });