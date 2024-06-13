<script>
    export let value;
    export let placeholder;

    function handleInput(event) {
        value = event.target.value;
    }
</script>

<div class="input-wrapper">
    <input type="text" id="input" class="form-control" placeholder={placeholder} value={value} on:input={handleInput}>
    <label for="input" class="control-label">{placeholder}</label>
</div>

<style>
	.input-wrapper {
		position: relative;
        height: 100%;
        margin-top: 30px;
    }

	.form-control {
		display: block;
		line-height: 2em;
		padding-left: 10px;
		width: 100%;
        height: 35px;
		font-size: medium;
		border: 0;
        outline: 0;
		border-radius: 5px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-weight: 500;
	}

	.form-control:focus {
		border: 1px solid #6200ea;
	}

	.control-label {
		display: block;
		position: absolute;
		opacity: 0;
		bottom: 1.9rem;
		color: #6200ea;
		transition: 0.6s cubic-bezier(.29, 1.01, 1, -0.68) transform;
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
		transition: 0.2s ease-in-out transform;
	}

</style>
