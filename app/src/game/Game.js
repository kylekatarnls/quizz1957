import GamePanel from 'src/game/components/panel/GamePanel';
import Questions from 'src/game/services/Questions';

export default angular
  .module('game', [
    'ngMaterial',
    Questions.name,
  ])

  .component(GamePanel.name, GamePanel.config);
