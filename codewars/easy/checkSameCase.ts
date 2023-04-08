function checkSameCase(a: string, b: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

	if (!alphabet.includes(a) || !alphabet.includes(b)) return -1

	const isALowercase = a === a.toLowerCase()
	const isBLowercase = b === b.toLowerCase()

	return isALowercase === isBLowercase ? 1 : 0
}

export { checkSameCase }
