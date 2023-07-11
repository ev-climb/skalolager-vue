import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount('#app');

///////
function isPangram(string) {
  let counter = 0;
  const alph = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  alph.map((a) => {
    string[a] && counter++;
    return counter;
  });
  console.log(counter);
  return counter == 28 ? true : false;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
