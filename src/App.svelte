<script>
  import viteLogo from '/vite.svg'
  import Card from './lib/Card.svelte';
  import Info from './lib/Info.svelte';
  import SendCv from './lib/SendCv.svelte';
</script>

<body>
  <aside class="sidebar">
    <div class="logo_container">
      <img src={viteLogo} alt="logo">
    </div>
    <ul>
      <li><a href="#info">Информация</a></li>
      <li><a href="#vacancies">Вакансии</a></li>
      <li><a href="#sendCv">Отправить CV</a></li>
      <li><a href="#contacts">Контакты</a></li>
    </ul>
  </aside>
  <main class="content">
    <Info id="info"/>
    <div class="vacancies_container" id="vacancies" >
      <h2>Вакансии</h2>
      <div class="vacancies">
        <Card
          name="Врач"
          description="Лечит людей"
          img="https://via.placeholder.com/100"
        />
        <Card
          name="Копирайтер"
          description="Пишет тексты"
          img="https://via.placeholder.com/100"
        />
        <Card
          name="Графический дизайнер"
          description="Рисует картинки"
          img="https://via.placeholder.com/100"
        />
      </div>
    </div>
    <div class="sendCv_container" id="sendCv">
      <h2>Отправить CV</h2>
      <div class="sendCv">
        <SendCv />
      </div>
    </div>
  </main>
<footer id="contacts" class="content">
  <h2>Контакты</h2>
</footer>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, sans-serif;
    background-image: url('assets/banner-1.jpg');
    height: 100vh;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    background-color: #333;
    color: #fff;
    overflow: auto;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 20px;
  }

  .sidebar ul li {
    margin-bottom: 10px;
  }

  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px;
    background-color: #444;
    border-radius: 5px;
    text-align: center;
  }

  .sidebar ul li a:hover {
    background-color: #555;
  }

  .logo_container {
    margin-top: 20px;
    text-align: center;
  }

  .content {
    margin-left: 180px;
    padding: 20px;
  }

  .vacancies {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 1200px) {
    .content {
      margin-left: 80px; /* Adjust for smaller screens */
    }

    .sidebar {
      width: 80px;
    }

    .sidebar ul li a {
      padding: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 992px) {
    .content {
      margin-left: 70px;
    }

    .sidebar {
      width: 70px;
    }

    .sidebar ul li a {
      padding: 7px;
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    .content {
      margin-left: 60px;
    }

    .sidebar {
      width: 60px;
    }

    .sidebar ul li a {
      padding: 6px;
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    .content {
      margin-left: 50px;
    }

    .sidebar {
      width: 50px;
    }

    .sidebar ul li a {
      padding: 5px;
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    .content {
      margin-left: 45px;
    }

    .sidebar {
      width: 45px;
    }

    .sidebar ul li a {
      padding: 4px;
      font-size: 10px;
    }
  }

  @media (max-width: 360px) {
    .content {
      margin-left: 40px;
    }

    .sidebar {
      width: 40px;
    }

    .sidebar ul li a {
      padding: 3px;
      font-size: 9px;
    }
  }
</style>
