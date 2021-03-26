

require('./bootstrap');

window.Vue = require('vue');


Vue.component('app-component', require('./components/AppComponent.vue').default);
Vue.component('posts-component', require('./components/PostComponent.vue').default);
Vue.component('infinite-loading-component', require('vue-infinite-loading').default);

import router from './routes';

const app = new Vue({
    el: '#app',
    router,
});
