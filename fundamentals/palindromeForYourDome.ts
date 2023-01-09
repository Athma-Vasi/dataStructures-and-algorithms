function isPalindrome(string: string) {
	const illegalChars = `,.':;"?/[]{}\|-_+=~!@#$%^&*()<>`

	let reversed = string.split(' ').join('').split('').reverse().join('').toLowerCase()
	reversed = reversed
		.split('')
		.reduce((acc, curr) => (illegalChars.includes(curr) ? acc : (acc += curr)), '')

	const sanitizedOGString = string
		.split(' ')
		.join('')
		.toLowerCase()
		.split('')
		.reduce((acc, curr) => (illegalChars.includes(curr) ? acc : (acc += curr)), '')

	return sanitizedOGString
		.split('')
		.reduceRight((acc: boolean[], curr, idx) => {
			curr === reversed[idx] ? acc.push(true) : acc.push(false)

			return acc
		}, [])
		.includes(false)
		? false
		: true
}

export { isPalindrome }
