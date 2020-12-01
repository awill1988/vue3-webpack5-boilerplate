import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

let vuetify: Vuetify;

export function setupVuetify(): Vuetify {
	vuetify = new Vuetify({});
	return vuetify;
}

vuetify = setupVuetify();

export default vuetify;
