<script>
	import Dropdown from './Dropdown.svelte';
    import DropdownItem from './DropdownItem.svelte';

    export let sectionTitle;
    export let jobs = [];
</script>

<div class="job">
    <h2>{sectionTitle}</h2>
    {#each jobs as { title, responsibilities, requirements, conditions, salary, username }}
        <Dropdown title={title}>
            <DropdownItem
                {responsibilities}
                {requirements}
                {conditions}
                {salary}
                {username}
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
