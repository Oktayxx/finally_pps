<template>
  <footer class="footer container">

    <div class="footer__title-wrapper">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
      <h1 class="footer__title" id="footer">Контакты</h1>
    </div>
    <hr class="footer__line">
    <!-- Контейнер с контактами -->
    <div class="footer__contacts">
      <ul class="footer__list">
        <li class="footer__item"><span>Колл центр</span> +7 771 949 9911</li>
        <li class="footer__item"><span>Офис регистратура</span> +7 771 949 9955</li>
        <li class="footer__item"><span>Ректорат</span> +7 771 949 9966</li>
        <li class="footer__item"><span>Бухгалтерия</span> +7 771 949 9944</li>
      </ul>
      <ul class="footer__list">
        <li class="footer__item"><span>Юрист</span> +7 705 957 5957</li>
        <li class="footer__item"><span>Молодежный центр</span> +7 705 957 5958</li>
        <li class="footer__item"><span>Центр Карьеры</span> +7 705 957 5959</li>
        <li class="footer__item"><span>Деканат</span> +7 705 957 5950</li>
      </ul>
      <ul class="footer__list">
        <li class="footer__item"><span>БИ</span> +7 705 957 5951</li>
        <li class="footer__item"><span>МИБ</span> +7 705 957 5952</li>
        <li class="footer__item"><span>ТИГ</span> +7 705 957 5954</li>
      </ul>
      <ul class="footer__list">
        <li class="footer__item"><span>СГН</span> +7 705 957 5953</li>
        <li class="footer__item"><span>ФиУ</span> +7 705 957 5955</li>
        <li class="footer__item"><span>ЯЦ</span> +7 705 957 5956</li>
      </ul>
    </div>
    <hr>
    <p class="footer__company">© 1992-2023, ТОО «Университет Международного Бизнеса имени Кенжегали Сагадиева»</p>
  </footer>
</template>

<style scoped>
.footer {
  background: #1d5525;
  color: white;
  padding: 10px 20px;
  text-align: center;
  display: block;
  width: 100%;
}
.footer__title-wrapper {
  position: relative;
  text-align: center;
}
/* Заголовок */
.footer__title {
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  top: -10px; /* Смещаем чуть выше */
}

/* Контейнер контактов */
.footer__contacts {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки вместо 6 */
  gap: 40px;
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
}

/* Стили списка */
.footer__list {
  list-style: none;
  padding: 0;
}

.footer__item {
  font-size: 17px;
  margin-bottom: 8px;
}

.footer__item span {
  font-weight: bold;
}

/* Подвал */
.footer__company {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

/* Адаптив */
@media (max-width: 1024px) {
  .footer__contacts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer__contacts {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
<script setup lang="ts">
</script>