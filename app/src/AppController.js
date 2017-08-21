/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.selected = null;
    this.locked = false;
    this.teams = [];
    this.avatars = [];
    for (let i = 1; i <= 4; i++) {
      this.avatars.push('svg-' + i);
    }
    for (let i = 10; i <= 16; i++) {
      this.avatars.push('svg-' + i);
    }
  }

  toggleTeamsList() {
    this.$mdSidenav('left').toggle();
  }

  lock() {
    this.locked = true;
  }

  isLocked() {
    return this.locked;
  }
}

export default ['$mdSidenav', AppController];
