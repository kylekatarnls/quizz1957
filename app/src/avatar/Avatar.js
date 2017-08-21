import SelectAvatar from 'src/avatar/components/select/SelectAvatar';

export default angular
  .module('avatar', ['ngMaterial'])

  .component(SelectAvatar.name, SelectAvatar.config);
