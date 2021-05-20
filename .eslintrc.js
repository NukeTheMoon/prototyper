module.exports = {
	root: true,
	env: {
		node: true
	},

	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint'
	],

	parserOptions: {
		ecmaVersion: 2020
	},

	plugins: ['simple-import-sort', 'import'],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'max-len': ['error', { code: 100, ignoreUrls: true }],

		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'import/extensions': ['error', 'never', { vue: 'always' }],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn'
	},

	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	],

	settings: {
		'import/resolver': {
			webpack: {
				config: 'node_modules/@vue/cli-service/webpack.config.js'
			}
		}
	}
};
