const remoteJobs = [
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

const onsiteJobs = [
	{
		name: 'Руководитель SMM-отдела',
		responsibilities: [
			'Участие и контроль разработки стратегий продвижения в социальных сетях для 3-х брендов (сегмент техника/электроника)',
			'Контроль реализации стратегии',
			'Инициирование и проработка нестандартных интеграций',
			'Постоянный поиск новых видов контента для достижения wow-эффекта у пользователя, внедрение в контент-план',
		],
		requirements: [
			'Опыт работы в области SMM и управлении социальными медиа не менее 5 лет и опыт работы на позиции SMM lead не менее 1 года',
			'Глубокое понимание специфики работы платформ Instagram, Telegram, VK, Youtube',
			'Опыт разработки стратегий продвижения брендов в соцсетях (самостоятельно / с агентством)',
			'Креативное мышление, опыт реализации нестандартных проектов в соцсетях',
			'Высоко развитый навык коммуникации и организации работы',
		],
		conditions: [
			'Офис в Москва-сити, башня Империя',
			'График работы с 8:00-17:00 или с 9:30-18:30',
			'Забота о здоровье: ДМС, массажные кресла в офисе',
		],
		salary: '200000'
	},
	{
		name: 'Аналитик',
		responsibilities: [
			'Взаимодействие с бизнес-средой в рамках исследования предметной области, анализа рынка и лучших практик, формирования и поддержания в актуальном состоянии дорожной карты продукта «Умный кампус».',
			'Разработка и согласование бизнес-функциональных требований к программному продукту, передача в группу разработки для реализации, контроль реализации дорожной карты.',
			'Подготовка материалов о продукте (презентации и прочее) и участие в различных мероприятиях (фокус группы, бизнес-встречи и т.д.) в рамках продвижения программного продукта.',
		],
		requirements: [
			'Высокий уровень самоорганизации и опыт работы в условиях самостоятельного исследования и проработки новых предметных областей.',
			'Опыт работы в роли бизнес-аналитика (управление требованиями к ПО, постановка задач группе разработки/группе системного анализа, разработка проектной документации).',
			'Опыт публичных выступлений.',
		],
		conditions: [
			'Мини тренажерный зал, теннис стол и игровые автоматы на территории офиса',
			'Полис ДМС после испытательного срока',
			'Компенсация затрат на мобильную связь',
		],
		salary: '150000'
	},
];

export const jobs = {
	remoteJobs,
	onsiteJobs
}
