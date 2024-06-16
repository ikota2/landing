<script>
  import Features from './lib/Features.svelte';
  import Navigation from './lib/Navigation.svelte';
  import {jobs} from './data/index.js';
  import Job from './lib/Job.svelte';
  import SendCv from './lib/SendCv.svelte';

  import svgP from './assets/circles.svg';

  let activeSection = 'info';
  const { remoteJobs, onsiteJobs } = jobs;
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
          <img src={svgP} alt="Your description" class="logo"/>
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
            С «Ювента» вы всегда на шаг впереди в вопросах кадрового обеспечения!
          </p>
        </div>
        <Features />
      </section>
      <section id="remote" class="jobs">
        <Job title="Удаленная работа" jobs={remoteJobs} />
      </section>
      <section id="onsite" class="jobs">
        <Job title="Работа на месте" jobs={onsiteJobs} />
      </section>
      <section id="contacts">
          <div class="contact">
             <h2>Отправить резюме</h2>
            <SendCv />
          </div>
      </section>
    </main>
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
  .logo {
    width: 50px;
    height: 50px;
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
    margin-top: 3rem;
    /*background: rgb(180,58,125);*/
    /*background: linear-gradient(90deg,*/
    /*    rgba(180,58,125,0.186734068627451) 0%,*/
    /*    rgba(205,253,29,0.1643251050420168) 50%,*/
    /*    rgba(69,252,181,0.19233630952380953) 100%);*/
  }

  .info {
    text-align: center;
    line-height: 1.5;
    font-size: 1.3rem;
  }
  .jobs {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .contact h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
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
