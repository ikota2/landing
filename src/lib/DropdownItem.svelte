<script>
    import {jobs} from '../stores/jobs.js';

    export let responsibilities;
    export let requirements;
    export let conditions;
    export let salary;

    function goToTelegram() {
        window.open("https://t.me/bloommmannn", "_blank");
    }
		function chooseJob() {
			document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
		}
</script>

<div class="dropdown-item">
    <div class="subItem">
        <div class="responsibilities">
            <h4 class="title">Обязанности</h4>
            <ul>
                {#each responsibilities as responsibility}
                    <li>{responsibility}</li>
                {/each}
            </ul>
        </div>
        <div class="requirements">
            <h4>Требования</h4>
            <ul>
                {#each requirements as requirement}
                    <li>{requirement}</li>
                {/each}
            </ul>
        </div>
        <div class="conditions">
            <h4>Условия</h4>
            <ul>
                {#each conditions as condition}
                    <li>{condition}</li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="subItem">
        <div class="salary">
            <h4>{salary}р.</h4>
        </div>
        <div class="buttons">
            <button on:click={goToTelegram} type="button" class="btn">Написать в телегу</button>
            <button on:click={chooseJob} class="btn">Отправить резюме</button>
        </div>
    </div>
</div>

<style>
	.dropdown-item {
		display: grid;
		grid-template-columns: 2fr 1fr;
		padding: 1rem;
		border-radius: 5px;
		background-color: #ffffff;
		cursor: auto;
	}
	.subItem {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.subItem:last-child {
		text-align: right;
	}
	.dropdown-item h4 {
		grid-column: 1 / -1;
		margin: 0.5rem 0;
	}
	.dropdown-item ul {
		padding-left: 1.5rem;
	}
	.dropdown-item ul li {
		list-style-type: disc;
	}

    .btn {
        margin-top: 20px;
        padding: 10px 20px;
        text-decoration: none;
        background-color: #fff;
        color: #b74c7d;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }
    .btn:hover {
        background-color: #f0f0f0;
    }
    .btn.active {
        background-color: #b74c7d;
        color: white;
        border-color: #b74c7d;
    }
    .btn.active:hover {
        background-color: #9e426e;
    }
    .btn:focus {
        outline: 2px solid #96e9c6;
        outline-offset: 2px;
    }
	.salary {
		font-weight: 500;
		font-size: 1.2rem;
	}
	.buttons {
		display: flex;
		flex-direction: row;
	}
	.buttons button {
		width: 200px;
	}
	.buttons button:first-child {
		margin-right: 20px;
	}

	@media (max-width: 768px) {
		.dropdown-item {
			grid-template-columns: 1fr;
			text-align: left;
		}
		.subItem:last-child {
			text-align: left;
		}
		.dropdown-item button {
			width: 100%;
			margin: 0.5rem 0;
		}
		.buttons {
			flex-direction: column;
		}
		.buttons button:first-child {
			margin-right: 0;
		}
		.salary {
			font-size: 1rem;
		}
		.dropdown-item h4, .dropdown-item ul {
			font-size: 0.9rem;
		}
		.dropdown-item ul li {
			font-size: 0.9rem;
		}
	}
</style>
