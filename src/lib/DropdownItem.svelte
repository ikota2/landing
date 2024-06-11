<script>
    export let responsibilities;
    export let requirements;
    export let conditions;
    export let salary;

    function goToTelegram() {
        window.open("https://t.me/bloommmannn", "_blank");
    }

</script>

<div class="dropdown-item">
    <div class="subItem">
        <div class="responsibilities">
            <h4>Обязанности</h4>
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
            <button on:click={goToTelegram}>Написать в телегу</button>
            <button>Отправить резюме</button>
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
	.dropdown-item button {
		grid-column: 1 / -1;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #fff;
		color: #6200ea;
		border: 1px solid #6200ea;
		cursor: pointer;
		align-self: center;
		justify-self: center;
	}
	.dropdown-item button:hover {
		background-color: #3700b3;
		color: #fff;
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
