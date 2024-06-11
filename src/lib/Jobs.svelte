<script>
	import Dropdown from './Dropdown.svelte';
    import DropdownItem from './DropdownItem.svelte';

    const jobs = [
        { name: 'Графический дизайнер', responsibilities: ['рисовать пикчи'], requirements: ['владеть фш и фигмой'], conditions: [], salary: '75000-150000' },
        { name: 'Диктор', responsibilities: ['болтать', 'не пиздеть'], requirements: ['грамотная речь', 'опыт работы'], conditions: [],
          salary: '50000-100000'
                },
        { name: 'Саппорт в благотворительный фонд',
          responsibilities: [
            'обратная связь',
            'организация работ',
            'подготовка отчетов по работе'
          ],
          requirements: [
            'Грамотная речь - письменная и устная. Умение организовать свою мысль',
            'Высокая коммуникативность, дружелюбность. Развитые софт скиллы',
            'Стрессоустойчивость',
            'Умение работать с большими объемами информации и в потоке многозадачности',
            'Умение признавать свои ошибки и исправлять их.',
          ],
          conditions: [],
            salary: '50000-100000'
        },
  ];
</script>

<div class="jobs">
    <h2>Удаленная работа</h2>
    {#each jobs as { name, responsibilities, requirements, conditions, salary }}
        <Dropdown title={name}>
            <DropdownItem
                name={name}
                responsibilities={responsibilities}
                requirements={requirements}
                conditions={conditions}
                salary={salary}
            />
        </Dropdown>
    {/each}
</div>

<style>
	.jobs {
		width: 100%;
		margin: 0 auto;
	}
    .jobs h2 {
      text-align: center;
    }
</style>
