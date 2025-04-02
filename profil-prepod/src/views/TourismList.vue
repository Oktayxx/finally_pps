<template>
  <!-- Навигационная панель -->
  <nav class="navbar">
    <div class="navbar-left">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
      <h1 class="navbar-title">Университет Международного Бизнеса</h1>
    </div>
    <div class="navbar-buttons">
      <button @click="$router.push('/')">Главная</button>
      <button @click="scrollToContacts">Контакты</button> <!-- Изменено -->

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
      <h1>Туризм и Гостеприимство</h1>
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

    <!-- Футер -->
    <footer ref="contactsSection" class="footer">
      <div class="footer-line"></div>
      <h3>Контакты</h3>
      <div class="footer-contacts">
        <ul class="contacts-list">
          <li><span>Колл центр:</span> +7 771 949 9911</li>
          <li><span>Офис регистратура:</span> +7 771 949 9955</li>
          <li><span>Ректорат:</span> +7 771 949 9966</li>
          <li><span>Бухгалтерия:</span> +7 771 949 9944</li>
          <li><span>Юрист:</span> +7 705 957 5957</li>
          <li><span>Молодежный центр:</span> +7 705 957 5958</li>
          <li><span>Центр Карьеры:</span> +7 705 957 5959</li>
          <li><span>Деканат:</span> +7 705 957 5950</li>
          <li><span>БИ:</span> +7 705 957 5951</li>
          <li><span>МИБ:</span> +7 705 957 5952</li>
          <li><span>ТИГ:</span> +7 705 957 5954</li>
          <li><span>СГН:</span> +7 705 957 5953</li>
          <li><span>ФиУ:</span> +7 705 957 5955</li>
          <li><span>ЯЦ:</span> +7 705 957 5956</li>
        </ul>
      </div>
    </footer>

    <!-- Копирайт -->
    <div class="copyright">
      ©️ 1992-2023, ТОО «Университет Международного Бизнеса имени Кенжегали Сагадиева»
    </div>
  </div>
</template>

<script>
export default {
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
    scrollToContacts() {
      this.$nextTick(() => {
        this.$refs.contactsSection.scrollIntoView({ behavior: "smooth" });
      });
    },
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
    }
  }
};
</script>

<style scoped>

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}
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

.faculty-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
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
.footer-line {
  width: 100%;
  height: 2px;
  background-color: #1a6728; /* Цвет линии */
  margin-bottom: 20px; /* Отступ снизу */
}
.footer {
  background: #ffffff;
  padding: 20px 0;
  text-align: center;
  margin-top: 40px;
  position: relative;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}
.footer-contacts {
  display: flex;
  justify-content: flex-start; /* Выровнять контент влево */
}

.contacts-list {
  display: grid;
  grid-template-columns: repeat(4, auto); /* 4 столбца */
  gap: 5px; /* Отступы между элементами */
  text-align: left; /* Выравнивание текста влево */
}

.contacts-list li {
  white-space: nowrap; /* Чтобы не переносилось */
}

.footer p {
  margin: 5px 0;
  color: #ffffff;
}
.footer h3 {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
}

.footer ul li {
  font-size: 1rem;
}

.footer ul li span {
  font-weight: bold;
}

/* Копирайт */
.copyright {
  text-align: center;
  padding: 10px;
  font-size: 14px;
  color: gray;
  background-color: #ffffff;
  border-top: 2px solid #1a6728;
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

  .faculty-list {
    grid-template-columns: repeat(2, 1fr); /* 2 колонки вместо 4 */
    gap: 20px;
    padding: 20px;
  }

  .faculty-card {
    width: 100%;
  }

  .navbar {
    padding: 10px 20px;
  }

  .search-input {
    max-width: 90%;
    padding: 10px;
  }

  .contacts-list {
    grid-template-columns: repeat(2, auto);
    text-align: center;
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

  .faculty-list {
    grid-template-columns: repeat(1, 1fr);
  }

  .faculty-card {
    width: 100%;
  }

  .search-bar {
    flex-direction: column;
  }

  .search-input {
    width: 100%;
    max-width: 100%;
  }

  .contacts-list {
    grid-template-columns: repeat(1, auto);
  }

  .footer {
    padding: 10px;
  }

  .footer ul {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 480px) {
  .navbar-title {
    font-size: 1.2em;
  }

  .faculty-list {
    gap: 10px;
  }

  .faculty-card {
    padding: 10px;
  }

  .search-input {
    font-size: 14px;
  }

  .contacts-list {
    gap: 5px;
  }
}
</style>
