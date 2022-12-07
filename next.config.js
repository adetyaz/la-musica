module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/collections',
				destination: '/Collections',
			},
		]
	},
}
