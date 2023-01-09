function getFreeUrinals(urinals: string) {
	const urinalsCountMap = urinals.split('').reduce((acc: Map<string, number>, curr) => {
		let hasCount = acc.get(curr) ?? 0
		acc.set(curr, (hasCount += 1))

		return acc
	}, new Map())

	const urinalsCount: [string, number][] = []

	let urinalCounter = 1
	for (let i = 1; i < urinals.length; i += 1) {
		if (urinals[i - 1] === urinals[i]) {
			urinalCounter += 1
		} else {
			urinalsCount.push([urinals[i - 1], urinalCounter])
			urinalCounter = 1
		}

		if (i === urinals.length - 1) urinalsCount.push([urinals[i], urinalCounter])
	}

	const updatedUrinals = urinalsCount.reduce((acc, curr: [string, number], idx) => {
		if (idx === 0 && curr[0] === '0') {
			if (curr[1] % 2 !== 0) {
				for (let i = 1; i <= curr[1]; i += 1) {
					i === 1 || i % 2 !== 0 ? (acc += '1') : (acc += '0')
				}
			} else {
				for (let i = 1; i <= curr[1]; i += 1) {
					i === 1 || i % 2 !== 0 ? (acc += '1') : (acc += '0')
				}
			}
		} else {
			if (curr[0] === '0' && curr[1] % 2 !== 0) {
				for (let i = 1; i <= curr[1]; i += 1) {
					i !== 1 && i % 2 === 0 ? (acc += '1') : (acc += '0')
				}
			} else acc += curr[0].repeat(curr[1])
		}

		return acc
	}, '')

	const updatedUrinalsMap = updatedUrinals
		.split('')
		.reduce((acc: Map<string, number>, curr) => {
			let hasCount = acc.get(curr) ?? 0
			acc.set(curr, (hasCount += 1))

			return acc
		}, new Map())

	return [urinalsCountMap, updatedUrinalsMap, updatedUrinals]

	const oldOneCount = urinalsCountMap.get('1') ?? 0
	const newOneCount = updatedUrinalsMap.get('1') ?? 0

	return newOneCount - oldOneCount
}

// console.log(getFreeUrinals('10001'))
// console.log(getFreeUrinals('1001'))
// console.log(getFreeUrinals('00000'))
console.log(getFreeUrinals('01000')) //1
