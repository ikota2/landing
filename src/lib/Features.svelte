<script>
    import success from '../assets/success.svg';
    import team from '../assets/team.svg';
    import renovation from '../assets/renovation.svg';

		const features = [
	{picPath: team, header: 'для опытных и начинающих', paragraph: 'Наша база вакансий включает предложения для соискателей с любым уровнем опыта, от новичков до экспертов'},
	{picPath: renovation, header: 'удаленная и локальная работа', paragraph: 'Мы предлагаем широкий выбор вакансий как для удаленной работы, так и для работы на месте'},
	{picPath: success, header: 'оперативность и качество', paragraph: 'Благодаря нашей оперативности вы можете быть уверены в своевременном решении кадровых вопросов'},
]
</script>
<div class="features">
    {#each features as feature}
        <div class="feature">
            <div>
                <img src={feature.picPath} alt="logo" class="company-logo">
            </div>
            <div class="feature-content">
                <h5>{feature.header}</h5>
                <p>{feature.paragraph}</p>
            </div>
        </div>
    {/each}
</div>

<style>
	.features {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 20px;
		text-align: center;
		flex-wrap: wrap;
	}
	.feature {
		flex: 1 1 300px;
		padding: 10px;
		display: flex;
        flex-direction: column;
		justify-content: space-between;
	}
	.company-logo {
		width: 100px;
      height: 100px;
		margin-bottom: 10px;
	}
	.feature-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
	}
	h5 {
		margin: 10px 0;
		font-size: 1.2rem;
		height: 3rem;
        font-weight: 700;
	}
	p {
		margin: 0;
		font-size: 1rem;
		flex-grow: 1;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		text-align: center;
	}
	@media (max-width: 768px) {
		.feature {
			flex: 1 1 100%;
			margin-bottom: 20px;
		}
	}
</style>
