<script>
	export let value;
	export let placeholder;
</script>

<div class="box">
    <div class="textarea-wrapper">
        <textarea id="textarea" class="form-control" bind:value placeholder={placeholder}></textarea>
        <label for="textarea" class="control-label">{placeholder}</label>
    </div>
</div>

<style>
	.textarea-wrapper {
		position: relative;
		margin: 15px auto;
		height: 100%;
	}

	.form-control {
		display: block;
		line-height: 1.5em;
		margin: 0;
		padding-left: 10px;
		padding-top: 10px;
		width: 300px;
        height: 200px;
		font-size: medium;
		border: 0;
		outline: 0;
		border-radius: 5px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-weight: 500;
		resize: both;
	}

	.form-control:focus {
		border: 1px solid #6200ea;
	}

	.control-label {
		display: block;
		position: absolute;
		opacity: 0;
		top: -15px;
		left: 10px;
		color: #6200ea;
		transition: 0.3s ease-in-out transform;
		font-size: 13px;
		font-weight: 500;
	}

	.form-control:placeholder-shown + .control-label {
		visibility: hidden;
		z-index: -1;
		transition: 0.2s ease-in-out;
	}

	.form-control:not(:placeholder-shown) + .control-label,
	.form-control:focus:not(:placeholder-shown) + .control-label {
		visibility: visible;
		z-index: 1;
		opacity: 1;
		transform: translateY(-10px);
		transition: 0.3s ease-in-out transform;
	}
</style>
