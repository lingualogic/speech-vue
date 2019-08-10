import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { ServiceManager } from 'speech-vue';

import App from './App.vue';

ServiceManager.init();

library.add(faVolumeOff, faVolumeUp);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
