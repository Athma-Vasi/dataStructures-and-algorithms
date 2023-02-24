function backspacesInString(s: string) {
	let result: unknown[] = s.split('')

	while (result.includes('#')) {
		for (let i = 0; i < s.length; i += 1) {
			if (s[i] === '#') {
				result[i] = null
				result[i - 1] = null
				result = result.filter((char) => char !== null)
				break
			}
		}
	}
	return result
}

console.log(backspacesInString('abc#d##c'))
