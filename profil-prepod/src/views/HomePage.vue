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
    margin-left: 20px;
    font-size: 45px;
    text-align: left;
    padding: 120px 40px;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    color: black;
  }
  
  .header__subtitle {
    font-weight: 400;
    margin-right: 900px;
    font-size: 35px;
    margin-top: -210px;
    text-align: left;
    padding: 60px;
    white-space: nowrap;
    font-family: "Montserrat", sans-serif;
  }
  
  .header__logo {
    height: 400px;
    width: auto;
    margin-left: 670px;
    margin-top: -390px;
    margin-bottom: 50px;
  }
  
  /* Общий стиль */
  .home {
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #353535;
  }

  </style>
  