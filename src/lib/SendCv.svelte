<script>
    import Input from './Input.svelte';
    import Textarea from './Textarea.svelte';
	import { apiBaseUrl } from '../config';

	export let jobs = [];
	let name = '';
	let email = '';
	let telegram = '';
	let position = '';
	let experience = '';
    $: jobsList = jobs.filter(job => job?.title);

	const handleSubmit = async (event) => {
		event.preventDefault();
        const formData = {
            name,
            email,
            telegram,
            position,
            experience
        };
		try {
			const response = await fetch(`${apiBaseUrl}/api/send-cv`, {
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
	console.log(jobs)
</script>

<div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={position} class="custom-select" required>
            <option value="" disabled selected>Выберите должность</option>
            {#each jobsList as job}
                <option value={job.title}>{job.title}</option>
            {/each}
        </select>
        <Input bind:value={name} placeholder={'Имя'} />
        <Input bind:value={email} placeholder={'Email'} />
        <Input bind:value={telegram} placeholder={'Telegram'} />
        <Textarea bind:value={experience} placeholder={'Опыт'} />
        <div class="btn-wrapper">
            <button type="submit" class="btn">Отправить</button>
        </div>
    </form>
</div>

<style>
	.form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
	}
    .custom-select {
      width: 100%;
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn {
        margin-top: 20px;
        padding: 10px 20px;
        text-decoration: none;
        color: #6200ea;
        background-color: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }
</style>
