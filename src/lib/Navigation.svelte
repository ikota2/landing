<script>
    export let scrollToSection;
	export let activeSection;

	const sections = [
		{ id: 'info', label: 'Кто мы?' },
		{ id: 'remote', label: 'Удаленная работа' },
		{ id: 'onsite', label: 'Работа на месте' },
		{ id: 'contacts', label: 'Связаться с нами' }
	];
</script>

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

<style>
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
    @media (max-width: 1024px) and (min-width: 769px) {
        nav ul li button {
            padding: 8px 16px;
            font-size: 14px;
        }
    }
</style>
