<script>
	// Hoeveel vierkantjes er vallen.
	const squareCount = 200;

	// Geeft een willekeurig getal tussen min en max.
	function randomBetween(min, max) {
		return min + Math.random() * (max - min);
	}

	// Elk vierkantje krijgt zijn eigen waarden. De namen hieronder zijn
	// delay is negatief dan is de animatie al bezig zodra de pagina laadt
	const squares = [];

	for (let counter = 0; counter < squareCount; counter++) {
		squares.push({
			left: randomBetween(0, 100),     
			opacity: randomBetween(0.2, 0.9), 
			duration: randomBetween(4, 10),   
			delay: randomBetween(-10, 0)      
		});
	}
</script>

<div class="background">
	<div class="squares">
		{#each squares as square}
			<span
				class="square"
				style="
					left: {square.left}vw;
					opacity: {square.opacity};
					animation-duration: {square.duration}s;
					animation-delay: {square.delay}s;
				"
			></span>
		{/each}
	</div>
</div>

<style>

	.background {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		overflow: hidden;
		background:  #000000;
	}

	.squares {
		position: absolute;
		top: 0;
		width: 100vw;
		height: 100%;
	}

	
	.square {
		position: absolute;
		top: -100px;
		width: 10px;
		height: 10px;
		background-color: #ffffff;

		animation-name: fall;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes fall {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(100vh + 200px));
		}
	}

	
	@media (prefers-reduced-motion: reduce) {
		.squares {
			display: none;
		}
	}
</style>
