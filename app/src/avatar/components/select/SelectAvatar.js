export default {
  name: 'selectAvatar',
  config: {
    bindings: {
      avatars: '<',
      select: '&onSelect',
    },
    templateUrl: 'src/avatar/components/select/SelectAvatar.html',
  },
};
