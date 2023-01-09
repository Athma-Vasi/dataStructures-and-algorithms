function encrypt(text: string) {
	if (text === '' || text === null) return text

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	const numbers = '0123456789'
	const specialChars = `.,:;-?! '()$%&"`
	const region = [...alphabet, ...numbers, ...specialChars]

	const textCharsInRegionBoolArr = text.split('').reduce((acc: boolean[], curr) => {
		region.includes(curr) ? acc.push(true) : acc.push(false)

		return acc
	}, [])

	if (textCharsInRegionBoolArr.includes(false)) throw new Error('Invalid text string(s)')

	const every2ndCharCaseSwitched = text.split('').reduce((acc, curr, idx) => {
		if (idx !== 0) {
			if (idx % 2 === 0) acc += curr
			else {
				curr === curr.toLowerCase()
					? (acc += curr.toUpperCase())
					: (acc += curr.toLowerCase())
			}
		} else {
			acc += curr
		}

		return acc
	}, '')

	return every2ndCharCaseSwitched.split('').reduce((acc, curr, idx) => {
		if (idx !== 0) {
			//this block is inaccurate
			const prevCharInText = every2ndCharCaseSwitched[idx - 1]
			const prevCharIdxInRegion = region.findIndex((char) => char === prevCharInText)
			const currCharIdxInRegion = region.findIndex((char) => char === curr)
			const idxDiff = prevCharIdxInRegion - currCharIdxInRegion
			const idxOfNewCharInRegion = region.length - Math.abs(idxDiff)
			acc += region[idxOfNewCharInRegion]
		}

		if (idx === 0) {
			const idxOfCurrCharInRegion = region.findIndex((char) => char === curr)
			const mirrorIdxInRegion = region.length - 1 - idxOfCurrCharInRegion
			acc += region[mirrorIdxInRegion]
		}

		return acc
	}, '')
}

console.log(encrypt('Business'))
