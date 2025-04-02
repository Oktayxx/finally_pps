<template>
  <div class="home">
    <!-- Название университета -->
    <h1 class="header">Университет<br>Международного<br>Бизнеса</h1>
    <h2 class="header__subtitle">имени Кенжегали Сагадиева</h2>
    <img src="https://pps.uib.kz/img/uib_logo.275ded02.png" alt="Логотип" class="header__logo">
    
    <!-- Основная часть -->
    <main class="main-content">
      <!-- Кафедры -->
      <DepartNurkxan />
      
      <!-- Контакты -->
      
      <!-- Футер -->
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Footer from '@/components/AppFooter.vue';
import DepartNurkxan from '@/components/DepartNurkxan.vue';
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2%;
  font-size: 3vw;
  text-align: left;
  padding: 10vh 4vw;
  font-family: "Montserrat", sans-serif;
  color: black;
}

.header__subtitle {
  font-weight: 400;
  font-size: 2.5vw;
  margin-top: -5vh;
  text-align: left;
  padding: 3vh 4vw;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;
}

.header__logo {
  width: 30vw;
  max-width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: -10vh;
  margin-bottom: 5vh;
}

/* Общий стиль */
.home {
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #353535;
  overflow-x: hidden;
} 

/* Адаптация под мобильные устройства */
@media (max-width: 768px) {
  .header {
      font-size: 5vw;
      text-align: center;
      padding: 5vh 2vw;
  }

  .header__subtitle {
      font-size: 4vw;
      text-align: center;
      padding: 2vh 2vw;
      margin-top: 0;
  }

  .header__logo {
      width: 50vw;
      max-width: 200px;
      margin-top: 2vh;
  }
}
</style>