import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "";

Vue.filter("currency", value => {
    return "$" + value.toLocaleString();
});

const router = new VueRouter({
    mode: "history",
    routes
});

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
