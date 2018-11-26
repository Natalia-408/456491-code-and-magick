'use strict';
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