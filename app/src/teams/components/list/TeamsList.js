import controller from 'src/teams/components/list/TeamsListController.js';

export default {
  name: 'teamsList',
  config: {
    bindings: {
      teams: '=',
      locked: '<',
      avatars: '<',
      init: '&onLoad',
      focusTeam: '&onTeamFocus',
      blurTeam: '&onTeamBlur',
    },
    templateUrl: 'src/teams/components/list/TeamsList.html',
    controller,
  },
};
