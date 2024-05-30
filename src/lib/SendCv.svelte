<script>
    let name = '';
    let email = '';
    let telegram = '';
    let position = '';
    let experience = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, email, telegram, position, experience };

        try {
            const response = await fetch('http://localhost:3000/send-cv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully');
            } else {
                alert('Error submitting form');
            }
        } catch (error) {
            alert('Error submitting form');
        }
    };
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={position} required>
            <option value="" disabled selected>Выберите должность</option>
            <option value="doctor">Врач</option>
            <option value="copywriter">Копирайтер</option>
            <option value="designer">Графический дизайнер</option>
        </select>
<!--        <div class="input_wrapper">-->
            <input type="text" id="name" bind:value={name} placeholder="Имя" required />
<!--        </div>-->

<!--        <div class="input_wrapper">-->
            <input type="email" id="email" bind:value={email} placeholder="Email" required />
<!--        </div>-->

<!--        <div class="input_wrapper">-->
            <input type="text" id="telegram" placeholder="Telegram (optional)" bind:value={telegram} />
<!--        </div>-->

<!--        <div class="input_wrapper">-->
            <textarea id="experience" bind:value={experience} placeholder="Опыт" required></textarea>
<!--        </div>-->
<!--        <label>-->
<!--            Прикрепите свой CV в формате .pdf:-->
<!--            <input type="file" accept=".pdf" on:change={handleFileChange} required>-->
<!--        </label>-->

        <button type="submit">Отправить</button>
    </form>
</div>

<style>
	form {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
	}
	input, select, textarea {
        display: block;
		margin-top: 0.5rem;
	}
    select {
      width: auto;
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
