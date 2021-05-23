const actions = {
	async loadCrimes({ state }, lang) {
		state.crimes = await import(`@/csv/${lang}_crimes.csv`);
	},
	async loadCorruptions({ state }, lang) {
		state.corruptions = await import(`@/csv/${lang}_corruptions.csv`);
	}
};

export default actions;
