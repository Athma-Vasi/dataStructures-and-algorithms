function compareStrBySumOfChars(s1: string | null, s2: string | null) {
	// if (s1 === '' || (s1 === null && s2 === '') || s2 === null) return true
	if (s1 === '' && s2 === '') return true
	if (s1 === null && s2 === null) return true

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	const s1BoolArr = s1?.split('').reduce((acc: boolean[], curr) => {
		alphabet.includes(curr) ? acc.push(true) : acc.push(false)

		return acc
	}, [])
	const isS1Empty = s1BoolArr?.includes(false)

	const s2BoolArr = s1?.split('').reduce((acc: boolean[], curr) => {
		alphabet.includes(curr) ? acc.push(true) : acc.push(false)

		return acc
	}, [])
	const isS2Empty = s2BoolArr?.includes(false)

	if (isS1Empty && isS2Empty) return true
	if (isS1Empty || isS2Empty) return false

	const s1CharCode = s1?.split('').reduce((acc, curr) => (acc += curr.charCodeAt(0)), 0)
	const s2CharCode = s2?.split('').reduce((acc, curr) => (acc += curr.charCodeAt(0)), 0)

	// return s1CharCode === s2CharCode
	return [s1CharCode, s2CharCode]
}

console.log(compareStrBySumOfChars('AD', 'BC'))
console.log(compareStrBySumOfChars('AD', 'DD'))
