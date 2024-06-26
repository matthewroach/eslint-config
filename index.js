module.exports = {
	extends: [
		'next',
		'next/core-web-vitals',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
	ignorePatterns: [
		'.generated/**/*',
		'**/*.d.ts',
		'**/*.js',
		'*.targets',
		'**/temp/*',
	],
	rules: {
		'@next/next/no-img-element': 'off', // Don't force next/image
		'jsx-a11y/alt-text': ['warn', { elements: ['img'] }], // Don't force alt for <Image/> (sourced from Sitecore media)
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@next/next/no-html-link-for-pages': ['error'],
		'react/no-children-prop': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
}
