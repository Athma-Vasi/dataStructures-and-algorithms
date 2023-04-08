function firstNonRepeatingChar(s: string) {
	if (s === '' || s.length === 1) return s

	const strSet: Set<string> = new Set()
	let i = 0
	let j = i + 1
	let match = false

	while (!match) {
		const boolArr: boolean[] = []
		while (j < s.length) {
			if (strSet.has(s[i])) {
				i += 1
				j = i + 1
			} else {
				s[i] === s[j] ? boolArr.push(true) : boolArr.push(false)
				j += 1
			}
		}
		strSet.add(s[i])

		if (boolArr.includes(true)) {
			i += 1
			j = i + 1
		} else match = true
	}

	// return match === false ? '' : s[i]
	return match ? s[i] : ''
	// return Array.from(strSet).join('') === Array.from(new Set(s)).join('') ? '' : s[i]
}

// console.log(firstNonRepeatingChar('stress'))
// console.log(firstNonRepeatingChar('moonmen'))
console.log(firstNonRepeatingChar('baba'))
