'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var colorCoats = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var colorfireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

function getRandomProperty(arrayProperty) {
  var wisardProperty =
    arrayProperty[Math.floor(Math.random() * arrayProperty.length)];
  return wisardProperty;
}

function DeterminateWizard(fNames, lNames, Coats, Eyes) {
  this.name = getRandomProperty(fNames) + ' ' + getRandomProperty(lNames);
  this.coatColor = getRandomProperty(Coats);
  this.eyesColor = getRandomProperty(Eyes);
}
var wizardCount = 4;
var wizards = [];

for (var i = 0; i < wizardCount; i++) {
  wizards[i] = new DeterminateWizard(
      firstNames,
      lastNames,
      colorCoats,
      colorEyes
  );
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Открытие/закрытие окна настройки персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Изменение цвета мантии персонажа по клику
var wizardCoat = document.querySelectorAll('.wizard-coat');

var addCoatClickHandler = function (wCoat) {
  wCoat.addEventListener('click', function () {
    wCoat.style.fill = getRandomProperty(colorCoats);
  });
};

for (var j = 0; j < wizardCoat.length; j++) {
  addCoatClickHandler(wizardCoat[j]);
}

// Изменение цвета глаз персонажа по клику
var wizardEye = document.querySelectorAll('.wizard-eyes');

var addEyeClickHandler = function (wEye) {
  wEye.addEventListener('click', function () {
    wEye.style.fill = getRandomProperty(colorEyes);
  });
};

for (var j1 = 0; j1 < wizardEye.length; j1++) {
  addEyeClickHandler(wizardEye[j1]);
}

// Изменение цвета фаерболов персонажа по клику

var wizardFireball = document.querySelector('.setup-fireball-wrap');

var fireballClickHandler = function () {
  wizardFireball.style.background = getRandomProperty(colorfireballs);
};

wizardFireball.addEventListener('click', fireballClickHandler);
