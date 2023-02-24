function stringTransformer(str: string) {
	return str
		.split(' ')
		.reduceRight((acc: string[], curr) => {
			const temp = curr
				.split('')
				.reduce(
					(acc, curr) =>
						(acc +=
							curr.toLowerCase() === curr ? curr.toUpperCase() : curr.toLowerCase()),
					''
				)
			acc.push(temp)

			return acc
		}, [])
		.join(' ')
}

export { stringTransformer }
