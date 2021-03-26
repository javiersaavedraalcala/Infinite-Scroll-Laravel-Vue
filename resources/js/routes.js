
import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home.vue';
import Blog from './views/blog.vue';
import Post from './views/post.vue';
import Error404 from './views/404.vue';

Vue.use(Router)

export default new Router({
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: ':slug',
            name: 'post',
            component: Post,
            props: true
        },
        {
            path: '**',
            component: Error404
        }
    ],

    mode: 'history'
})

