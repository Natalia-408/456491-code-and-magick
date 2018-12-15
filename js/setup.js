'use strict';

(function () {
/*
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
*/

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  
  return wizardElement;
};

var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();
  
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';
  
  node.textContent = errorMessage; 
  document.body.insertAdjacentElement('afterbegin', node);
};

window.load(successHandler, errorHandler);

})();
