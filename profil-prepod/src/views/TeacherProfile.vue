<template>
  <div class="teacher-profile">
    <header class="header">
      <div class="logo">University of International Business</div>
      <nav class="nav">
        <router-link to="/">Главная</router-link>
        <a href="#">Контакты</a>

        <div class="dropdown" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
          <a href="#" class="dropbtn" @click.prevent="toggleDropdown">Кафедры</a>
          <div class="dropdown-content" v-show="isDropdownOpen">
            <router-link to="/department/management" @click="isDropdownOpen = false">Менеджмент и Бизнес</router-link>
            <router-link to="/department/social-sciences" @click="isDropdownOpen = false">Социально-гуманитарные</router-link>
            <router-link to="/department/finance" @click="isDropdownOpen = false">Финансы и Учет</router-link>
            <router-link to="/department/language-center" @click="isDropdownOpen = false">Языковой Центр</router-link>
            <router-link to="/department/business-it" @click="isDropdownOpen = false">Бизнес Информатика</router-link>
            <router-link to="/department/tourism" @click="isDropdownOpen = false">Туризм и Гостеприимство</router-link>
          </div>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="profile-container">
        <div class="photo-section">
          <img :src="teacher.photo" alt="Фото преподавателя" class="photo" />
          <p class="name">{{ teacher.name }}</p>
          <p class="degree">{{ teacher.degree }}</p>
        </div>

        <div class="info-section">
          <div class="tabs">
              <span v-for="(tab, index) in tabs" :key="index"
                    @click="activeTab = index"
                    :class="['tab', { active: activeTab === index }]">
                <i :class="tab.icon"></i>
              </span>
          </div>
          <div class="info-content">
            <h3 class="info-title">
              <i :class="tabs[activeTab].icon"></i> {{ tabs[activeTab].title }}
            </h3>
            <div v-html="tabs[activeTab].content"></div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-title">
        <h3>Контакты</h3>
      </div>
      <div class="contacts-grid">
        <div class="column">
          <p><strong>Колл центр:</strong> +7 771 949 9911</p>
          <p><strong>Офис регистратура:</strong> +7 771 949 9955</p>
          <p><strong>Ректорат:</strong> +7 771 949 9966</p>
        </div>

        <div class="column">
          <p><strong>Бухгалтерия:</strong> +7 771 949 9944</p>
          <p><strong>Юрист:</strong> +7 705 957 5957</p>
          <p><strong>Молодежный центр:</strong> +7 705 957 5958</p>
        </div>

        <div class="column">
          <p><strong>Центр Карьеры:</strong> +7 705 957 5959</p>
          <p><strong>Деканат:</strong> +7 705 957 5950</p>
          <p><strong>БИ:</strong> +7 705 957 5951</p>
        </div>

        <div class="column">
          <p><strong>МИБ:</strong> +7 705 957 5952</p>
          <p><strong>ТИГ:</strong> +7 705 957 5954</p>
          <p><strong>СГН:</strong> +7 705 957 5953</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teacher = ref({
  photo: '/images/teacher.jpg',
  name: '1',
  degree: 'Преподаватель',
  email: '123@uib.kz',
  languages: 'English A1 — Elementary'
});

const activeTab = ref(0);
const isDropdownOpen = ref(false);

const tabs = ref([
  { title: 'Основная информация', icon: 'fas fa-user', content: `<p><strong>ФИО:</strong> ${teacher.value.name}</p>
       <p><strong>Учёная степень:</strong> ${teacher.value.degree}</p>
       <p><strong>Почта:</strong> ${teacher.value.email}</p>
       <p><strong>Языковые навыки:</strong> ${teacher.value.languages}</p>` },
  { title: 'Образование', icon: 'fas fa-graduation-cap', content: '<p>Информация об образовании...</p>' },
  { title: 'Дисциплины', icon: 'fas fa-book', content: '<p>Список дисциплин...</p>' },
  { title: 'Расписание', icon: 'fas fa-calendar-alt', content: '<p>Расписание занятий...</p>' },
  { title: 'НИР', icon: 'fas fa-file-signature', content: '<p>Список научных работ...</p>' },
  { title: 'Сертификаты', icon: 'fas fa-scroll', content: '<p>Список сертификатов...</p>' }
]);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 100px; /* Перенесли padding внутрь */
}
.header {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a6728;
  color: rgb(255, 255, 255);
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 1px;
  padding: 20px 100px;
  font-size: 20px;
  border-radius: 10px;
  box-sizing: border-box; /* Учитывает padding в ширине */
  box-shadow: 0 6px 15px rgba(74, 138, 62, 0.5); /* Более мягкая тень */

}
.teacher-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background: #ffffff;
  font-family: Arial, sans-serif;
  color: rgb(0, 0, 0);
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  transition: 0.3s;
}

.nav a:hover {
  background: rgba(81, 150, 17, 0.2);
  border-radius: 5px;
}


.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  background: white;
  min-width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  top: 40px;
  left: 0;
  z-index: 100;
  display: none;
}



.dropdown-content a {
  color: #050101;
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}


.dropdown-content a:hover {
  background: #1a6728;
  color: white;

}

.dropdown:hover .dropdown-content {
  display: block;
}
/* Показываем меню при v-show */
.dropdown-content {
  display: block;
}

.profile-container {
  display: flex;
  gap: 100px;
  max-width: 1000px;
  margin: 80px auto 0; /* Добавил отступ сверху */
  align-items: center;
}

.photo-section {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(81, 150, 17, 0.2), 0 0 20px rgba(104, 194, 21, 0.2);
  text-align: center;
  width: 220px;
  height: 300px;
  flex-shrink: 0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.photo-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(81, 150, 17, 0.2);
}

.photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s;
}

.photo:hover {
  transform: scale(1.1);
}

.name {
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
}

.degree {
  font-size: 14px;
  color: #666;
}

.info-section {
  flex-grow: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(81, 150, 17, 0.2), 0 0 20px rgba(81, 150, 17, 0.2);
  min-height: 320px;

}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
}

.tab {
  padding: 15px;
  background: linear-gradient(135deg, #00ff33, #0b4516);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  transition: transform 0.2s, background 0.3s;
}

.tab:hover {
  transform: scale(1.1);
}

.tab i {
  font-size: 20px;
  color: #444;
}

.tab.active {
  background: linear-gradient(135deg, #28db21, #4b4a76);
  color: white;
  transform: scale(1.15);
}

.info-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-title i {
  font-size: 20px;
}

/* Стиль для футера */
.footer {
  background: white;
  color: black;
  padding: 20px; /* Уменьшил отступы */
  text-align: center;
  margin-top: 50px; /* Добавил больше пространства сверху */
}

.footer-title {
  text-align: center;
  margin-bottom: 20px;
}

.footer-title h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.contacts-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки вместо 6 */
  gap: 40px;
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
  margin-top: 20px;
  background: #ffffff;
  color: #000000;
  margin-bottom: 8px;
  font-weight: bold;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column p {
  font-size: 14px;
  margin: 0; /* Удалены отступы между контактами */
}

</style>
страница профиля препода