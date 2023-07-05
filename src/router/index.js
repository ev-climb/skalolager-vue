import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

function alphabetPosition(text) {
  const arr = text.split('');
  // const arr2 = arr.map((i) => i.charCodeAt(0));
  return arr;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
