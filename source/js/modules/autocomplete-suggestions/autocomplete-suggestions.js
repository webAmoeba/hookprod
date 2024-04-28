// mock
let suggestions = [
  'abuse', 'abricose',
  'banana', 'band',
  'cindicat', 'candy',
  'eford', 'elfy',
  'full', 'factory',
  'gehesys', 'generation',
  'hetero', 'homo',
  'intellect', 'iteration',
  'jerk', 'jnr',
  'kelvin', 'kubrick',
  'lamer', 'limb',
  'moon', 'Makeev',
  'never', 'nickel back',
  'open', 'organic',
  'pascal', 'parent',
  'quick', 'quack',
  'Reels maker', 'Reels съемка', 'Reels maker обучение', 'Reels монтаж',
  'stuff', 'several',
  'teacher', 'teenager',
  'Ubuntu', 'Ugreen',
  'vendetta', 'vacansy',
  'wood', 'water',
  'Xentation', 'Xerox',
  'Yellowstone', 'Yoksel',
  'Zendeya', 'Zed redactor',

  'Абажур', 'Алфавит',
  'Баррикады', 'Бадабум',
  'Варикоз', 'Валиум',
  'Груз', 'гвозди',
  'дурак', 'деньги',
  'ежевика', 'енот',
  'ёлка', 'Ёксель',
  'жизнь', 'жиклер',
  'зной', 'закалка',
  'индюк', 'Илай',
  'йод',
  'каналья', 'кубернетес',
  'лама', 'лимб',
  'Маккартни', 'МакДонлальдс',
  'Нефертити', 'Нокаут',
  'Оппенгеймер', 'Ореол',
  'Пассатижи', 'полоний',
  'ректификат', 'раунд',
  'сенат', 'саунд',
  'трюфель', 'Танос',
  'уги', 'уголь',
  'фракция', 'фалафель',
  'хребет', 'хлебец',
  'цоколь', 'цапля',
  'червоточина', 'чесотка',
  'шакал', 'шелуха',
  'щелочь',
  'эму', 'юла',
  'яма', 'яблоко'
];

let input = document.getElementById('input-search');
let list = document.getElementById('search-list');

if (input && list) {
  input.addEventListener('keyup', () => {
    removeElements();

    for (let i of suggestions) {
      if (i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value !== '') {
        let listItem = document.createElement('li');
        listItem.classList.add('form-search__suggestion-item');
        listItem.setAttribute('tabindex', '0');
        listItem.addEventListener('click', () => displayNames(i));
        listItem.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            displayNames(i);
          }
        });
        listItem.setAttribute('data-value', i);
        let word = '<b>' + i.substring(0, input.value.length) + '</b>';
        word += i.substring(input.value.length);
        listItem.innerHTML = word;
        list.appendChild(listItem);
      }
    }
  });
}

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
