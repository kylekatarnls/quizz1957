// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Teams from 'src/teams/Teams';
import Game from 'src/game/Game';
import Avatar from 'src/avatar/Avatar';

export default angular
  .module('quizz1957', [
    'ngMaterial',
    Teams.name,
    Game.name,
    Avatar.name,
  ])
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet('./assets/svg/avatars.svg', 128)
      .icon('menu', './assets/svg/menu.svg', 24)
      .icon('share', './assets/svg/share.svg', 24)
      .icon('google_plus', './assets/svg/google_plus.svg', 24)
      .icon('hangouts', './assets/svg/hangouts.svg', 24)
      .icon('twitter', './assets/svg/twitter.svg', 24)
      .icon('phone', './assets/svg/phone.svg', 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .controller('AppController', AppController);
