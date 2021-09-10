import { createApp } from 'vue'
import App from './App.vue'

import * as FilledIcons from '@bitcoin-design/bitcoin-icons-vue/filled';
import * as OutlineIcons from '@bitcoin-design/bitcoin-icons-vue/outline';

const appInstance = createApp(App)

Object.keys(FilledIcons).forEach(key => {
	appInstance.component(key + 'Filled', FilledIcons[key]);
});

Object.keys(OutlineIcons).forEach(key => {
	appInstance.component(key + 'Outline', OutlineIcons[key]);
});

appInstance.mount('#app')