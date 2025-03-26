<template>
  <!-- Навигационная панель -->
  <nav class="navbar">
    <div class="navbar-left">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
      <h1 class="navbar-title">Университет Международного Бизнеса</h1>
    </div>
    <div class="navbar-buttons">
      <button @click="$router.push('/')">Главная</button>
      <button @click="scrollToFooter">Контакты</button> <!-- Изменено -->

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

  <div class="container">
    <!-- Поисковая строка -->
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="Поиск преподавателя..." v-model="searchQuery" />
    </div>

    <!-- Секция преподавателей -->
    <div class="teachers">
      <h1>Финансы и Учет</h1>
      <div class="faculty-container">
        <!-- Кнопка "Назад" -->
        <button class="arrow-button" @click="prevPage" v-if="currentPage > 0">←</button>

        <!-- Список преподавателей -->
        <div class="faculty-list">
          <div v-for="professor in paginatedProfessors" :key="professor.id" class="faculty-card" @click="$router.push(`/teacher/${professor.id}`)">
            <div class="image-placeholder">
              <i class="fas fa-user"></i> <!-- Иконка пользователя -->
            </div>
            <div class="faculty-info">
              <p>{{ professor.name }}</p>
              <p class="faculty-title">{{ professor.title }}</p>
            </div>
          </div>
        </div>

        <!-- Кнопка "Вперёд" -->
        <button class="arrow-button" @click="nextPage" v-if="(currentPage + 1) * itemsPerPage < filteredProfessors.length">→</button>
      </div>
    </div>


  </div>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <Footer />
</template>

<script>
import Footer from "@/components/AppFooter.vue";

export default {
  components: {Footer},
  data() {
    return {
      searchQuery: "",
      currentPage: 0,
      itemsPerPage: 8,
      dropdownVisible: false, // Видимость выпадающего списка
      departments: [
        { id: 1, name: "Финансы и Учет", link: "/department/finance" },
        { id: 2, name: "Бизнес Информатика", link: "/department/business-it" },
        { id: 3, name: "Языковой Центр", link: "/department/language-center" },
        { id: 4, name: "Менеджмент и Бизнес", link: "/department/management" },
        { id: 5, name: "Социально-Гуманитарные Науки", link: "/department/social-sciences" },
        { id: 6, name: "Туризм и Гостеприимство", link: "/department/tourism" }
      ],
      professors: [
        { id: 1, name: "1", title: "Заведующий кафедрой" },
        { id: 2, name: "2", title: "Преподаватель" },
        { id: 3, name: "3", title: "Доцент" },
        { id: 4, name: "4", title: "Преподаватель" },
        { id: 5, name: "5", title: "Профессор" },
        { id: 6, name: "6", title: "Приглашённый лектор" },
        { id: 7, name: "7", title: "Доцент" },
        { id: 8, name: "8", title: "Преподаватель" },
        { id: 9, name: "9", title: "Преподаватель" }
      ]
    };
  },
  computed: {
    filteredProfessors() {
      return this.professors.filter(professor =>
          professor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedProfessors() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProfessors.slice(start, end);
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    goToDepartment(link) {
      this.$router.push(link);
      this.dropdownVisible = false;
    },
    nextPage() {
      if ((this.currentPage + 1) * this.itemsPerPage < this.filteredProfessors.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    scrollToFooter() {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>

.container {
  max-width: 100%;

  flex: 1;
  padding: 10px;

  flex-direction: column;

}
/* Навигационная панель */
.navbar {
  background-color: #1a6728;
  width: 100%;
  padding: 10px 10px;
  box-shadow: 0px 4px 6px rgba(32, 128, 48, 0.336);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  position: relative;

}

/* Название университета */
.navbar-title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  color: #ffffff;

}

/* Заголовок кафедры */
.teachers h1 {
  font-size: 1.5em; /* Увеличенный размер */
  font-weight: bold; /* Жирный текст */
  color: #1a6728; /* Новый цвет (оранжево-коричневый) */
  text-transform: uppercase; /* Делаем заглавными буквами */
  margin-bottom: 15px; /* Отступ снизу */
  font-family: "Montserrat", sans-serif;
}

/* Контейнер кнопок */
.navbar-buttons {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: 490px; /* Настроить нужный отступ вправо */
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

/* Поисковая строка */
.search-bar {
  margin-top: 15px;
  width: 100%; /* Растягиваем на всю доступную ширину */
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

.search-input {
  width: 100%; /* Увеличиваем ширину */
  max-width: 1500px; /* Ограничиваем максимальный размер */
  padding: 12px 20px;
  font-size: 1em;
  border: 2px solid #1a6728;
  border-radius: 6px;
  outline: none;
  font-family: "Montserrat", sans-serif;
}

/* Секция преподавателей */
.teachers {
  text-align: center;
  padding: 20px;
  font-family: "Montserrat", sans-serif;
}

/* Грид преподавателей */
.faculty-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.faculty-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

/* Карточка преподавателя */
.faculty-card {
  width: 250px;
  background: #fff;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Изначальная тень */
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
}

/* Эффект наведения */
.faculty-card:hover {
  box-shadow: none; /* Убираем тень при наведении */
  transform: translateY(-5px);
}



/* Фото преподавателей */
.image-placeholder {
  width: 100%;
  height: 275px;
  background: #ccc;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

/* Информация о преподавателе */
.faculty-info {
  padding: 10px;
  text-align: center;
  background: white;
}

.faculty-info p {
  margin: 5px 0;
  font-size: 0.9rem;
}

/* Кнопки навигации (стрелки) */
.arrow-button {
  background: #1a6728;
  border: none;
  padding: 12px;
  font-size: 1.5em;
  color: white;
  cursor: pointer;
  border-radius: 50%; /* Делаем кнопку круглой */
  width: 50px; /* Фиксированный размер */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.2s ease-in-out;
}

/* Эффект при наведении */
.arrow-button:hover {
  background: #1a6728;
  transform: scale(1.1);
}





/* Стили для выпадающего списка */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0; /* Прижимает список к правому краю кнопки */
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
</style>
