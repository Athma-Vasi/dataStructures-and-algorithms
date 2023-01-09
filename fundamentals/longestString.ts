function longest(s1: string, s2: string) {
	if (s1 === '' || s2 === '') return ''

	const s1Arr = s1.toLowerCase().split('')
	const s2Arr = s2.toLowerCase().split('')

	const strSet: Set<string> = new Set([...s1Arr, ...s2Arr])

	return Array.from(strSet).sort().join('')
}

console.log(longest('aretheyhere', 'yestheyarehere'))

export { longest }
