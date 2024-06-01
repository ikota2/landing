<script>
  import viteLogo from '/vite.svg'
  import Card from './lib/Card.svelte';
  import Info from './lib/Info.svelte';
  import SendCv from './lib/SendCv.svelte';
  import CvTable from './lib/CvTable.svelte';

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<body>
    <div class="sidebar">
      <div class="logo_container">
        <img src={viteLogo} alt="logo">
      </div>
      <ul>
        <li><a href="#info" on:click={scrollToSection}>Информация</a></li>
        <li><a href="#vacancies" on:click={scrollToSection}>Вакансии</a></li>
        <li><a href="#sendCv" on:click={scrollToSection}>Отправить CV</a></li>
        <li><a href="#contacts" on:click={scrollToSection}>Контакты</a></li>
      </ul>
    </div>
    <div class="main">
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
          <Card
                  name="Кот"
                  description="Ест и спит"
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
      <div>
        <h2>table</h2>
        <CvTable />
      </div>
      <div id="contacts" class="contacts">
        <h2>Контакты</h2>
        <p>mymail@mail.ru</p>
        <p>telegram: @takoyto</p>
      </div>
    </div>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .sidebar {
    width: 180px;
    height: 100vh;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
  }
  .logo_container {
    margin-top: 20px;
    text-align: center;
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
  .main {
    margin-left: 180px;
  }
  .vacancies_container, .sendCv_container, .contacts {
    margin-top: 200px;
  }

  .vacancies {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 1200px) {
    .main {
      margin-left: 180px;
    }

    .sidebar {
      width: 180px;
    }

    .sidebar ul li a {
      padding: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 992px) {
    .main {
      margin-left: 180px;
    }

    .sidebar {
      width: 180px;
    }

    .sidebar ul li a {
      padding: 7px;
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    .main {
      margin-left: 0;
    }

    .sidebar {
      display: none;
    }

    .sidebar ul li a {
      padding: 6px;
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    .main {
      margin-left: 0;
    }

    .sidebar {
      display: none;
    }

    .sidebar ul li a {
      padding: 5px;
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    .main {
      margin-left: 0;
    }

    .sidebar {
      display: none;
    }

    .sidebar ul li a {
      padding: 4px;
      font-size: 10px;
    }
  }

  @media (max-width: 360px) {
    .sidebar ul li a {
      padding: 3px;
      font-size: 9px;
    }
  }



</style>
