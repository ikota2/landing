<script>
  import viteLogo from '/vite.svg';
  import Features from './lib/Features.svelte';

  const sections = [
    { id: 'info', label: 'Кто мы?' },
    { id: 'remote', label: 'Удаленная работа' },
    { id: 'onsite', label: 'Работа на месте' },
    { id: 'contacts', label: 'Связаться с нами' }
  ];

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
        <nav>
          <ul>
            {#each sections as section}
              <li>
                <button
                  class:active={activeSection === section.id}
                  on:click={() => scrollToSection(section.id)}>
                  {section.label}
                </button>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section id="info" class="info">
        <h2>Кто мы?</h2>
        <p>
          Кадровое агентство «Ювента» — ваш надежный партнер в поиске профессионалов и создании успешных команд. Мы специализируемся на подборе персонала для различных отраслей, используя современные методики и индивидуальный подход к каждому клиенту. Наша цель — обеспечить ваш бизнес талантливыми и мотивированными сотрудниками, способными достигать высоких результатов. С «Экспертус» вы всегда на шаг впереди в вопросах кадрового обеспечения!
        </p>
        <Features />
      </section>
      <section id="remote">
        hello remote
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
  nav {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
  }
  nav ul li {
    margin: 0;
    padding: 0;
  }
  nav ul li button {
    padding: 10px 20px;
    text-decoration: none;
    color: #6200ea;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  nav ul li button.active {
    background-color: #6200ea;
    color: #fff;
  }
  nav ul li button:hover {
    background-color: #3700b3;
    color: #fff;
  }
  section:not(:first-child) {
    margin-top: 50px;
  }
  .info {
    margin-top: 50px;
  }
</style>
