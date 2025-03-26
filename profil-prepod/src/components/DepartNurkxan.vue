<template>
  <div class="title">

    <h1 class="title">Кафедры университета</h1>
    <div class="departments-grid">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
      <div
          v-for="(department, index) in departments"
          :key="index"
          class="depart-card"
          :style="{ '--color': department.color, '--shadow-color': department.color + '40' }"
      >
        <router-link :to="department.link" class="department-link">
          <!-- Иконка кафедры -->
          <font-awesome-icon
              :icon="department.icon"
              class="department-icon"
          />
          <h3>{{ department.name }}</h3>
          <p>{{ department.description }}</p>
          <span class="arrow">→</span>
        </router-link>
      </div>


      <h2 class="leaders-title">Руководство университета</h2>



      <div class="leaders-container">
        <div v-for="leader in leaders" :key="leader.id" class="leader-card">
          <div class="leader-photo" :class="{ 'no-photo': !leader.photo }">
            <img v-if="leader.photo" :src="leader.photo" alt="Фото" />
            <svg v-else class="camera-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">


            </svg>
          </div>
          <div class="leader-info">
            <h3>{{ leader.name }}</h3>
            <p>{{ leader.position }}</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { faBriefcase, faGlobe, faChartLine, faLanguage, faLaptop, faHotel } from "@fortawesome/free-solid-svg-icons";

const departments = ref([
  { name: "Менеджмент и Бизнес", link: "/department/management", color: "#1a6728", icon: faBriefcase },
  { name: "Социально-Гуманитарные Науки", link: "/department/social-sciences", color: "#1a6728", icon: faGlobe },
  { name: "Финансы и Учет", link: "/department/finance", color: "#1a6728", icon: faChartLine },
  { name: "Языковой Центр", link: "/department/language-center", color: "#1a6728", icon: faLanguage },
  { name: "Бизнес Информатика", link: "/department/business-it", color: "#1a6728", icon: faLaptop },
  { name: "Туризм и Гостеприимство", link: "/department/tourism", color: "#1a6728", icon: faHotel }
]);


const leaders = ref([
  { id: 1, photo: "", name:  "Ректор Университета UIB" },
  { id: 2, photo: "", name: "Проректор по социальному развитию" },
  { id: 3, photo: "", name:  "Проректор по науке" },
  { id: 4, photo: "", name: "Проректор по цифровизации" }
]);



</script>

<style scoped>
.leaders-title {
  grid-column: 1 / -1; /* Заголовок растягивается на всю ширину */
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  margin: 4px 4px; /* Достаточно отступов сверху и снизу */

  font-family: "Montserrat", sans-serif;
}
.leaders-container {
  display: flex;
  gap: 80px;
  justify-content: center;
  flex: 1; /* Растягивается на доступное пространство */
  min-width: 1300px; /* Минимальная ширина карточки */
  max-width: 1800px;
  width: calc(100% / 4 - 40px);
  flex-wrap: wrap;
  min-height: 400px;


}

.leader-card {
  width: 250px;
  background: #fff;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Изначальная тень */
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.leader-card:hover {
  box-shadow: none; /* Убираем тень при наведении */
  transform: translateY(-5px); /* Поднимаем карточку */
}
.leader-photo {
  width: 100%;
  height: 300px; /* Увеличил высоту */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}


.leader-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Растягиваем фото без искажений */
}

.no-photo {
  background: #E5E5E5;
}

.camera-icon {
  width: 50px;
  height: 50px;
  color: #333;
}

.leader-info {
  padding: 15px;
  background: white;
  font-family: "Montserrat", sans-serif;
  margin-top: auto; /* Отправляет текст в нижнюю часть карточки */
}

.leader-info h3 {
  font-size: 16px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
}

.leader-info p {
  font-size: 11px;
  color: #666;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
}


.title {
  font-size: 28px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 70px;
}
.depart-card h3 {
   font-size: 25px; /* Размер заголовка в карточке */
   font-weight: bold;
 }
.depart-card:hover .department-icon {
  opacity: 1; /* Появляется при наведении */
}
.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.7fr));
  gap: 40px;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;

}

.depart-card {
  padding: 20px 1px;
  border-radius: 40px;
  background: white;
  box-shadow: 1px 5px 15px;
  transition: all 0.3s ease-in-out;
  color: #1a6728;
  position: relative;
  text-align: left;
  overflow: hidden;
  min-height: 100px;
  height: auto;
}

.depart-card:hover {
  background: #1a6728;
  color: white;
  box-shadow: none;
}

.department-icon {
  font-size: 40px; /* Увеличивает размер иконки */
  display: block; /* Чтобы иконка не мешала другим элементам */
  margin: 0 auto 10px; /* Центрирует иконку и добавляет небольшой отступ снизу */
  text-align: center;
  color: white;
}

/* Стили для ссылок */
.department-link {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 10px;
}
</style>
