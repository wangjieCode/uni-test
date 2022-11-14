import {
	createSSRApp
} from "vue";
import { mmp } from '../../tool/mmp'

import '../mmp'
console.log(mmp)
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
