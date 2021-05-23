<template>
	<div class="card-crime">
		<base-card>
			<p class="card-crime__title">{{ crime.title }}</p>
			<p class="card-crime__description">{{ crime.description }}</p>
		</base-card>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import BaseCard from '@/components/BaseCard.vue';

export default defineComponent({
	components: { BaseCard },
	props: {
		crime: {
			type: Object as PropType<{ title: string; description: string }>,
			required: true
		}
	},
	setup() {
		return {};
	}
});
</script>

<style lang="scss">
.card-crime {
	display: flex;
	width: 3.5in;
	height: 2.5in;
}
</style>
