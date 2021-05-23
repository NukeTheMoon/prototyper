<template>
	<div class="base-print">
		<div v-if="crimes" class="base-print__crimes">
			<card-crime v-for="(crime, i) in crimes" :key="i" v-bind="{ crime }" />
		</div>
		<div v-if="corruptions" class="base-print__corruptions">
			<card-corruption
				v-for="(corruption, j) in corruptions"
				:key="j"
				v-bind="{ corruption }"
			/>
		</div>
		<div v-if="caseNumbers" class="base-print__case-numbers">
			<card-case-number
				v-for="(caseNumber, k) in caseNumbers"
				:key="k"
				v-bind="{ caseNumber }"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import CardCaseNumber from './CardCaseNumber.vue';
import CardCorruption from './CardCorruption.vue';
import CardCrime from './CardCrime.vue';

export default defineComponent({
	components: { CardCrime, CardCorruption, CardCaseNumber },
	async setup() {
		const store = useStore();

		await store.dispatch('loadCrimes', store.state.lang);

		return {
			crimes: computed(() => store.state.crimes),
			corruptions: computed(() => store.state.corruptions),
			caseNumbers: []
		};
	}
});
</script>

<style lang="scss">
$page-width: 297mm;
$page-height: 210mm;
$crime-card-width: 3.5in;
$crime-card-height: 2.5in;
$crimes-gap: 1cm;
.base-print {
	&__crimes {
		display: grid;
	}
}
</style>
