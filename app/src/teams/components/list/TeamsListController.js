class TeamsListController {
  constructor($element, $scope) {
    this.$element = $element;
    this.initNewTeam();
    $scope[this.controllerAs] = this;
    if (localStorage.teams) {
      this.teams = this.filterTeams(JSON.parse(localStorage.teams));
    }
    $scope.$watch('$ctrl.teams', teams => {
      if (teams && teams.length) {
        localStorage.teams = JSON.stringify(this.filterTeams(teams));
      }
    }, true);
    this.init({
      ctrl: this,
    });
  }

  selectAvatar(avatar) {
    this.newTeam.avatar = avatar;
    this.focusTeamName();
  }

  filterTeams(teams) {
    return teams.map(team => ({
      name: team.name,
      avatar: team.avatar,
      score: team.score,
    }));
  }

  initNewTeam() {
    this.newTeam = {score: 0};
  }

  addTeam() {
    this.teams.push(this.newTeam);
    this.initNewTeam();
  }

  removeTeam(team) {
    this.teams.splice(this.teams.indexOf(team), 1);
  }

  isNewTeamInvalid() {
    return !(this.newTeam.name && this.newTeam.avatar);
  }

  focusTeamName() {
    angular.element(this.$element[0].querySelector('.team-name'))[0].focus();
  }

  goToName() {
    setTimeout(() => {
      this.focusTeamName();
    }, 500);
  }

  manualSetScore(event, team) {
    if (event.ctrlKey) {
      if (event.button === 0) {
        team.score++;

        return;
      }
      if (event.button === 2) {
        team.score--;
      }
    }
  }
}

export default ['$element', '$scope', TeamsListController];
