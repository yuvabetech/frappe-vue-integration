frappe.pages['startup'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Vue Application',
		single_column: true
	});

	this.page.$Startup = new frappe.Startup.startup(this.page);

	$("head").append("<link href='/assets/vueapp/node_modules/vuetify/dist/vuetify.min.css' rel='stylesheet'>");
	$("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' />");
	$("head").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' />");
}