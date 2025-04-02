<template>
  <div>
    <AppNavbar @scroll-to-footer="scrollToFooter" />
    <div class="container">
      <!-- Поисковая строка -->
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="Поиск преподавателя..." v-model="searchQuery" />
      </div>

      <!-- Секция преподавателей -->
      <div class="teachers">
        <h1>{{ departmentName }}</h1>
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
    <AppFooter ref="footer" />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import professorsData from '@/assets/professors.json';

export default {
  components: {
    AppNavbar,
    AppFooter
  },
  
  data() {
    return {
      searchQuery: "",
      currentPage: 0,
      itemsPerPage: 8,
      departmentId: '',
      professors: []
    };
  },
  
  computed: {
    departmentName() {
      const department = professorsData.departments.find(dept => dept.id === this.departmentId);
      return department ? department.name : 'Кафедра';
    },
    
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
    loadProfessors() {
      const department = professorsData.departments.find(dept => dept.id === this.departmentId);
      this.professors = department ? department.professors : [];
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
      this.$refs.footer.$el.scrollIntoView({ behavior: "smooth" });
    }
  },
  
  created() {
    // Get the department ID from the route
    this.departmentId = this.$route.params.id || 'finance';
    this.loadProfessors();
  },
  
  watch: {
    // React to route changes to update department
    '$route.params.id': function(newId) {
      this.departmentId = newId || 'finance';
      this.loadProfessors();
      this.currentPage = 0;
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

/* Поисковая строка */
.search-bar {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

.search-input {
  width: 100%;
  max-width: 1500px;
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

/* Заголовок кафедры */
.teachers h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: #1a6728;
  text-transform: uppercase;
  margin-bottom: 15px;
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
}

/* Эффект наведения */
.faculty-card:hover {
  box-shadow: none;
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

.faculty-title {
  color: #666;
}

/* Кнопки навигации (стрелки) */
.arrow-button {
  background: #1a6728;
  border: none;
  padding: 12px;
  font-size: 1.5em;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
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

@media (max-width: 1024px) {
  .faculty-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .faculty-card {
    width: 100%;
  }

  .search-input {
    max-width: 90%;
    padding: 10px;
  }
}

@media (max-width: 768px) {
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
}

@media (max-width: 480px) {
  .faculty-list {
    gap: 10px;
  }

  .faculty-card {
    padding: 10px;
  }

  .search-input {
    font-size: 14px;
  }
}
</style>