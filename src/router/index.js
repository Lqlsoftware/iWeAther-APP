/**
 * @file index.js
 * @author Jeason<me@jeasonstudio.cn>
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Codesplit based on route
// const Home = ()=> System.import('pages/Home')
// const Test = ()=> System.import('pages/Test')
const NotFound = () => System.import('pages/NotFound');

export default new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        let ret = {
            x: 0,
            y: 0
        };
        if (to.hash) {
            ret = {
                selector: to.hash
            };
        } else if (savedPosition) {
            ret = savedPosition;
        }
        return ret;
    },
    routes: [{
        path: '*',
        name: 'NotFound',
        component: NotFound
    }]
});
