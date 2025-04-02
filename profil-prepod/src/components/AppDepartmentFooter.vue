<template>
    <footer ref="footer" id="footer" class="footer">
      <div class="footer-line"></div>
      <h3>Контакты</h3>
      <div class="footer-contacts">
        <ul class="contacts-list">
          <li v-for="(contact, index) in contacts" :key="index">
            <span>{{ contact.title }}:</span> {{ contact.phone }}
          </li>
        </ul>
      </div>
      <div class="copyright">
        ©️ 1992-2023, ТОО «Университет Международного Бизнеса имени Кенжегали Сагадиева»
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        contacts: [
          { title: "Колл центр", phone: "+7 771 949 9911" },
          { title: "Офис регистратура", phone: "+7 771 949 9955" },
          { title: "Ректорат", phone: "+7 771 949 9966" },
          { title: "Бухгалтерия", phone: "+7 771 949 9944" },
          { title: "Юрист", phone: "+7 705 957 5957" },
          { title: "Молодежный центр", phone: "+7 705 957 5958" },
          { title: "Центр Карьеры", phone: "+7 705 957 5959" },
          { title: "Деканат", phone: "+7 705 957 5950" },
          { title: "БИ", phone: "+7 705 957 5951" },
          { title: "МИБ", phone: "+7 705 957 5952" },
          { title: "ТИГ", phone: "+7 705 957 5954" },
          { title: "СГН", phone: "+7 705 957 5953" },
          { title: "ФиУ", phone: "+7 705 957 5955" },
          { title: "ЯЦ", phone: "+7 705 957 5956" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .footer-line {
    width: 100%;
    height: 2px;
    background-color: #1a6728;
    margin-bottom: 20px;
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
    justify-content: flex-start;
  }
  
  .contacts-list {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 5px;
    text-align: left;
  }
  
  .contacts-list li {
    white-space: nowrap;
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
  
  @media (max-width: 1024px) {
    .contacts-list {
      grid-template-columns: repeat(2, auto);
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
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
    .contacts-list {
      gap: 5px;
    }
  }
  </style>