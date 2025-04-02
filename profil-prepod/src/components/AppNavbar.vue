<template>
    <!-- Навигационная панель -->
    <nav class="navbar">
      <div class="navbar-left">
        <h1 class="navbar-title">Университет Международного Бизнеса</h1>
      </div>
      <div class="navbar-buttons">
        <button @click="$router.push('/')">Главная</button>
        <button @click="$emit('scroll-to-footer')">Контакты</button>
  
        <!-- Кнопка "Кафедра" с выпадающим списком -->
        <div class="dropdown">
          <button @click="toggleDropdown">Кафедра</button>
          <ul v-if="dropdownVisible" class="dropdown-menu">
            <li v-for="department in departments" :key="department.link">
              <button @click="goToDepartment(department.link)">
                {{ department.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
    data() {
      return {
        dropdownVisible: false,
        departments: [
          { id: 1, name: "Финансы и Учет", link: "/department/finance" },
          { id: 2, name: "Бизнес Информатика", link: "/department/business-it" },
          { id: 3, name: "Языковой Центр", link: "/department/language-center" },
          { id: 4, name: "Менеджмент и Бизнес", link: "/department/management" },
          { id: 5, name: "Социально-Гуманитарные Науки", link: "/department/social-sciences" },
          { id: 6, name: "Туризм и Гостеприимство", link: "/department/tourism" }
        ]
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      goToDepartment(link) {
        this.$router.push(link);
        this.dropdownVisible = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Навигационная панель */
  .navbar {
    background-color: #1a6728;
    width: 100%;
    padding: 10px 40px;
    box-shadow: 0px 4px 6px rgba(32, 128, 48, 0.336);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0;
    position: relative;
  }
  
  /* Название университета */
  .navbar-title {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    color: #ffffff;
  }
  
  /* Контейнер кнопок */
  .navbar-buttons {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-left: 490px;
  }
  
  /* Кнопки */
  .navbar-buttons button {
    background: white;
    border: 2px solid #1a6728;
    padding: 8px 15px;
    font-size: 1em;
    font-weight: bold;
    color: #1a6728;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: "Montserrat", sans-serif;
  }
  
  .navbar-buttons button:hover {
    background: #1a6728;
    color: white;
  }
  
  /* Стили для выпадающего списка */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 200px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  
  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .dropdown-menu li:hover {
    background: #f0f0f0;
  }
  
  @media (max-width: 1024px) {
    .navbar-buttons {
      margin-left: auto;
      gap: 10px;
    }
  
    .navbar {
      padding: 10px 20px;
    }
  
    .dropdown-menu {
      width: 150px;
    }
  }
  
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      text-align: center;
      padding: 10px;
    }
  
    .navbar-buttons {
      flex-direction: column;
      gap: 5px;
      margin-left: 0;
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .navbar-title {
      font-size: 1.2em;
    }
  }
  </style>