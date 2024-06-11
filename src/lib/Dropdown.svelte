<script>
	export let title;
	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="dropdown">
    <div class="dropdown-title" on:click={toggle}>
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
    </div>
    <div class="dropdown-content {isOpen ? 'open' : ''}">
        <slot></slot>
    </div>
</div>

<style>
	.dropdown {
		border-bottom: 1px solid #e0e0e0;
		cursor: pointer;
		margin-bottom: 1rem;
	}
	.dropdown-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #f9f9f9;
		border-radius: 5px;
	}
	.dropdown-content {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.3s ease, transform 0.3s ease;
		transform: scaleY(0);
		transform-origin: top;
		background-color: #ffffff;
		border: 1px solid #e0e0e0;
		border-radius: 5px;
		margin-top: 0.5rem;
	}
	.dropdown-content.open {
		max-height: 1000px;
		transform: scaleY(1);
	}
</style>
