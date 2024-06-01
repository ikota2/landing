<script>
	import { onMount } from 'svelte';
	let cvs = [];

	async function fetchCvs() {
		try {
			const response = await fetch('http://localhost:3000/get-data');
			if (response.ok) {
				cvs = await response.json();
			} else {
				console.error('Failed to fetch data');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

		async function deleteCv(id) {
			try {
				const response = await fetch(`http://localhost:3000/delete-cv/${id}`, {
					method: 'DELETE'
				});
				if (response.ok) {
					// Remove the deleted CV from the list
					cvs = cvs.filter(cv => cv.id !== id);
				} else {
					console.error('Failed to delete CV');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		}

	onMount(() => {
		fetchCvs();
	});
</script>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th, td {
		border: 1px solid #ddd;
		padding: 8px;
	}
	th {
		background-color: #f2f2f2;
	}
</style>

<h2>Submitted CVs</h2>
<button on:click={fetchCvs}>Refresh</button>
<table>
    <thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Telegram</th>
        <th>Experience</th>
        <th>Position</th>
    </tr>
    </thead>
    <tbody>
    {#each cvs as cv}
        <tr>
            <td on:click={() => deleteCv(cv.id)}>{cv.id}</td>
            <td>{cv.name}</td>
            <td>{cv.email}</td>
            <td>{cv.telegram}</td>
            <td>{cv.experience}</td>
            <td>{cv.position}</td>
        </tr>
    {/each}
    </tbody>
</table>
