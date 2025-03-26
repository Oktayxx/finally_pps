import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ManagementList from '../views/ManagementList.vue';
import FinanceList from '../views/FinanceList.vue';
import ITList from '../views/ITList.vue';
import SocialSciencesList from '../views/SocialSciencesList.vue';
import TourismList from '../views/TourismList.vue';
import LanguageCenterList from '../views/LanguageCenterList.vue';
import TeacherProfile from '../views/TeacherProfile.vue';

const routes = [
  { path: '/', component: HomePage }, // Главная страница
  { path: '/department/management', component: ManagementList },
  { path: '/department/finance', component: FinanceList },
  { path: '/department/business-it', component: ITList },
  { path: '/department/social-sciences', component: SocialSciencesList },
  { path: '/department/tourism', component: TourismList },
  { path: '/department/language-center', component: LanguageCenterList },
  { path: '/teacher/:id', component: TeacherProfile, props: true } // Динамический маршрут для профиля преподавателя
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }; // Плавная прокрутка вверх
  }
});

export default router;