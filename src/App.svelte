<script>
  import viteLogo from '/vite.svg';
  import Features from './lib/Features.svelte';
  import RemoteJobs from './lib/Jobs.svelte';
  import Navigation from './lib/Navigation.svelte';


  let activeSection = 'info';

  function scrollToSection(sectionId) {
    activeSection = sectionId;
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<body>
    <header>
      <div class="header-container">
        <div class="company">
          <img src={viteLogo} alt="logo" class="company-logo">
          <p class="company-title">Ювента</p>
        </div>
        <Navigation
            scrollToSection={scrollToSection}
            activeSection={activeSection}
        />
      </div>
    </header>
    <main>
      <section id="info">
        <div class="info">
          <h2>Кто мы?</h2>
          <p>
            Кадровое агентство «Ювента» — ваш надежный партнер в поиске профессионалов и создании успешных команд.
            Мы специализируемся на подборе персонала для различных отраслей, используя современные методики и индивидуальный подход к каждому клиенту.
            Наша цель — обеспечить ваш бизнес талантливыми и мотивированными сотрудниками, способными достигать высоких результатов.
          </p>
          <p>
            С «Экспертус» вы всегда на шаг впереди в вопросах кадрового обеспечения!
          </p>
        </div>
        <Features />
      </section>
      <section id="remote">
        <RemoteJobs />
      </section>
      <section id="onsite">
        hello onsite
      </section>
      <section id="contacts">
        hello contacts
      </section>
    </main>
    <footer>hello footer</footer>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(216, 27, 66, 0.94);
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    z-index: 2;
    height: 5rem;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .company {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .company-title {
    font-size: 32px;
  }

  section:not(:first-child) {
    margin-top: 50px;
  }
  main {
    margin-top: 100px;
  }
  .info {
    text-align: center;
    line-height: 1.5;
    font-size: 1.3rem;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .company-title {
      font-size: 24px;
    }
    .info {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    header {
      display: none;
    }
    main {
      margin-top: 0;
    }
  }
</style>
