import AdaptiveStore from 'ember-simple-auth/session-stores/adaptive';

export default AdaptiveStore.extend({
  cookieName: 'my-apps-session-cookie'
});
