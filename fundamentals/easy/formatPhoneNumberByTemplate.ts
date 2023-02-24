function formatNumber(number: number, template: string) {
	const lengthTemplate = template
		.split('')
		.reduce((acc, curr) => (curr === '#' ? (acc += 1) : acc), 0)

	const numberStr = number.toString()
	const lengthNumber = numberStr.length

	if (lengthNumber < lengthTemplate) return 'Invalid phone number'

	let idx = 0
	return template
		.split('')
		.reduce((acc: string[], curr) => {
			if (curr === '#') {
				acc.push(numberStr[idx])
				idx += 1
			} else acc.push(curr)

			return acc
		}, [])
		.join('')
}

export { formatNumber }
