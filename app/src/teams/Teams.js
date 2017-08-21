import TeamsList from 'src/teams/components/list/TeamsList';

export default angular
  .module('teams', ['ngMaterial'])

  .component(TeamsList.name, TeamsList.config);
