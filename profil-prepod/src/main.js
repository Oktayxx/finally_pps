import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Импортируем Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBriefcase, faGlobe, faChartLine, faGraduationCap, faLanguage, faLaptop } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Добавляем иконки в библиотеку
library.add(faBriefcase, faGlobe, faChartLine, faGraduationCap, faLanguage, faLaptop);

// Создаём приложение Vue
const app = createApp(App);

// Регистрируем компонент FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');



