function reversingWordsInAString(string: string) {
	return string
		.split(' ')
		.reduceRight((acc: string[], curr) => {
			acc.push(curr)

			return acc
		}, [])
		.join(' ')
}

export { reversingWordsInAString }
