function alphaNumericString(string: string) {
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'

	return string === ''
		? false
		: string
				.split('')
				.reduce((acc: boolean[], curr) => {
					alphabetLower.includes(curr) ||
					alphabetUpper.includes(curr) ||
					numbers.includes(curr)
						? acc.push(true)
						: acc.push(false)

					return acc
				}, [])
				.includes(false)
		? false
		: true
}

export { alphaNumericString }
