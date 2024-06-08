<script>
	import logo from '../assets/svelte.svg';
const features = [
	{picPath: '', header: 'для опытных и начинающих', paragraph: 'Наша база вакансий включает предложения для соискателей с любым уровнем опыта, от новичков до экспертов'},
	{picPath: '', header: 'удаленная и локальная работа', paragraph: 'Мы предлагаем широкий выбор вакансий как для удаленной работы, так и для работы на месте'},
	{picPath: '', header: 'оперативность и качество', paragraph: 'Благодаря нашей оперативности вы можете быть уверены в своевременном решении кадровых вопросов'},
]
</script>
<div class="features">
    {#each features as feature}
        <div class="feature">
            <img src={logo} alt="logo" class="company-logo">
            <h5>{feature.header}</h5>
            <p>{feature.paragraph}</p>
        </div>
    {/each}
</div>
<style>
    .features {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
</style>
