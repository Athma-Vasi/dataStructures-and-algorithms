function stringsMix(s1: string, s2: string) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'

	const s1Map = s1.split('').reduce((acc: Map<string, number>, curr) => {
		let hasValue = acc.get(`s1,${curr}`) ?? 0
		curr === ' '
			? acc
			: alphabets.includes(curr)
			? acc.set(`s1,${curr}`, (hasValue += 1))
			: acc

		return acc
	}, new Map())

	const s2Map = s2.split('').reduce((acc: Map<string, number>, curr) => {
		let hasValue = acc.get(`s2,${curr}`) ?? 0
		curr === ' '
			? acc
			: alphabets.includes(curr)
			? acc.set(`s2,${curr}`, (hasValue += 1))
			: acc

		return acc
	}, new Map())

	const s1AndS2WithDuplicates = Object.entries(Object.fromEntries(s1Map))
		.concat(Object.entries(Object.fromEntries(s2Map)))
		.sort((a: [string, number], b: [string, number]) => {
			const bStr = b[0].split(',')[1]
			const aStr = a[0].split(',')[1]

			return b[1] === a[1] ? (aStr < bStr ? -1 : aStr > bStr ? 1 : 0) : b[1] - a[1]
		})

	const unsortedWithoutDuplicates = s1AndS2WithDuplicates.reduceRight(
		(acc: Map<string, string>, curr: [string, number]) => {
			const char = curr[0].split(',')[1]
			const strPlusCount = `${curr[1]},${curr[0].split(',')[0]}`

			curr[1] === 1
				? acc
				: acc.get(char) && acc.get(char)?.split(',')[0] === curr[1].toString()
				? acc.set(char, `${curr[1]},s=`)
				: acc.set(char, strPlusCount)

			return acc
		},
		new Map()
	)

	const sortedWithoutDuplicates = Object.entries(
		Object.fromEntries(unsortedWithoutDuplicates)
	).sort((s1: [string, string], s2: [string, string]) => {
		const s1Char = s1[0]
		const s1Count = Number(s1[1].split(',')[0])
		const str1ID = Number(s1[1].split(',')[1][1])

		const s2Char = s2[0]
		const s2Count = Number(s2[1].split(',')[0])
		const str2ID = Number(s2[1].split(',')[1][1])

		//need to fix this logic
		return s2Count === s1Count
			? s1Char < s2Char
				? -1
				: s1Char > s2Char
				? 1
				: 0
			: s2Count - s1Count
	})

	const sortedWithEqualsLast = sortedWithoutDuplicates
		.reduce(
			(acc: [string, string][][], curr: [string, string]) => {
				const strID = curr[1].split(',')[1][1]

				strID === '=' ? acc[1].push(curr) : acc[0].push(curr)

				return acc
			},
			[[], []]
		)
		.flatMap((str) => str)

	const sortedLength = sortedWithEqualsLast.length
	return sortedWithEqualsLast
		.reduce((acc: string[], curr: [string, string], idx) => {
			const strID = curr[1].split(',')[1][1]
			const char = curr[0]
			const repeatCount = Number(curr[1].split(',')[0])

			acc.push(strID + ':')
			acc.push(char.repeat(repeatCount))
			idx === sortedLength ? acc : acc.push('/')

			return acc
		}, [])
		.join('')
		.slice(0, -1)
}

export { stringsMix }
