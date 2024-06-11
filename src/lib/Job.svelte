<script>
	import Dropdown from './Dropdown.svelte';
    import DropdownItem from './DropdownItem.svelte';

    export let title;
    export let jobs = [];
</script>

<div class="job">
    <h2>{title}</h2>
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
	.job {
		margin-bottom: 40px;
	}
	h2 {
		text-align: center;
		margin-bottom: 20px;
		font-size: 1.5rem;
		color: #333;
	}
</style>
