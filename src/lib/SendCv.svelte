<script>
	import { createEventDispatcher } from 'svelte';

    let firstName = '';
    let lastName = '';
    let position = '';
    let file = null;
    let emailSent = false;
    const dispatch = createEventDispatcher();

	function handleFileChange(event) {
		file = event.target.files[0];
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('position', position);
		formData.append('file', file);

		// Здесь мы отправляем данные формы на сервер
		// На серверной стороне (например, с помощью Node.js), вы можете настроить отправку письма с использованием nodemailer

		const response = await fetch('http://localhost:3000/send-email', {
			method: 'POST',
			body: formData
		});

        if (response.ok) {
            emailSent = true;
            dispatch('emailsent');
        } else {
            console.error('Error sending email');
        }
	}
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Имя:
            <input type="text" bind:value={firstName} required>
        </label>

        <label>
            Фамилия:
            <input type="text" bind:value={lastName} required>
        </label>

        <select bind:value={position} required>
            <option value="" disabled selected>Выберите должность</option>
            <option value="doctor">Врач</option>
            <option value="copywriter">Копирайтер</option>
            <option value="designer">Графический дизайнер</option>
        </select>

        <label>
            Прикрепите свой CV в формате .pdf:
            <input type="file" accept=".pdf" on:change={handleFileChange} required>
        </label>

        <button type="submit">Отправить</button>
    </form>

    {#if emailSent}
        <p>Спасибо! Резюме отправлено</p>
    {/if}
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: 1rem;
	}
	input, select {
		margin-top: 0.5rem;
	}
    select {
			width: 200px;
    }
	button {
      cursor: pointer;
      margin-top: 1rem;
      padding: 10px;
      width: 150px;
      background-color: peachpuff;
      border-radius: 5px;
      border: 1px solid crimson;
	}
</style>
