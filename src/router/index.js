import Vue from 'vue';
import Router from 'vue-router';
const files = require.context('.', true, /\.js$/);

let routes = [];
files.keys().forEach(key => {
	if (key === './index.js') return
	routes = routes.concat(files(key).default) 
})

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});
