<script>
	export let name;
	export let description;
	export let img;
</script>

<div class="card">
    <img src={img} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
</div>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	width: 300px;
}
</style>
