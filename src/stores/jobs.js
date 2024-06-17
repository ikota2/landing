// src/stores/jobs.js
import { writable } from 'svelte/store';

export const jobs = writable([
	{ name: 'Графический дизайнер', engName: 'designer', responsibilities: ['рисовать пикчи'], requirements: ['владеть фш и фигмой'], conditions: [], salary: '75000-150000', isChosen: false },
	{ name: 'Диктор', engName: 'speaker', responsibilities: ['болтать', 'не пиздеть'], requirements: ['грамотная речь', 'опыт работы'], salary: '75000', isChosen: false }
]);
