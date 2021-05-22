<template>
	<BasePrint />
</template>

<script>
import BasePrint from './components/BasePrint.vue';

export default {
	name: 'App',
	components: {
		BasePrint
	},
	setup() {
		return {};
	}
};
</script>

<style>
#app {
	margin-top: 60px;
	color: #2c3e50;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
