import controller from 'src/game/components/panel/GamePanelController.js';

export default {
  name: 'gamePanel',
  config: {
    bindings: {
      teams: '<',
      start: '&onStart',
      started: '<',
      enableKeyboard: '<',
    },
    templateUrl: 'src/game/components/panel/GamePanel.html',
    controller,
  },
};
