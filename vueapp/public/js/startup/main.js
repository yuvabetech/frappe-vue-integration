import App from './App.vue'

frappe.provide("frappe.Startup");

frappe.Startup.startup = class {
    constructor({ parent }) {
        this.$parent = $(document);
        this.page = parent.page;
        this.make_body();

    }

    make_body () {
        this.$el = this.$parent.find('.layout-main');
        this.vue = new Vue({
            vuetify: new Vuetify(),
            el: this.$el[0],
            data: {
            },
            render: h => h(App),
        });
    }

    setup_header () {}
}