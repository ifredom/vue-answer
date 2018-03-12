import Vue from 'vue';

import HelloComponent from './components/testtypescript/Hello.vue';
import HelloDecoratorComponent from './components/testtypescript/HelloDecorator.vue';

Vue.config.productionTip = false;

const init = new Vue({
  components: { HelloComponent },
  template: '<App/>'
}).$mount('#app');
