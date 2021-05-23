<template>
	<div class="base-card">
		<slot />
	</div>
</template>

<style lang="scss">
.base-card {
	background: white;
	border: 2px solid black;
	border-radius: 0.5cm;
	box-sizing: border-box;
	padding: 0.4cm;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
