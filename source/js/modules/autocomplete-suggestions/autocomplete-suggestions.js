// mock
let suggestions = ['Reel maker', 'Reel съемка', 'Reel maker обучение', 'Reel монтаж'];

let input = document.getElementById('input-search');
let list = document.getElementById('search-list');

input.addEventListener('keyup', () => {
  removeElements();

  for (let i of suggestions) {
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) &&
    input.value !== '') {
      let listItem = document.createElement('li');
      listItem.classList.add('form-search__suggestion-item');
      listItem.addEventListener('click', () => displayNames(i));
      listItem.setAttribute('data-value', i);
      let word = '<b>' + i.substring(0, input.value.length) + '</b>';
      word += i.substring(input.value.length);
      listItem.innerHTML = word;
      list.appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll('.form-search__suggestion-item');
  items.forEach((item) => {
    item.remove();
  });
}
