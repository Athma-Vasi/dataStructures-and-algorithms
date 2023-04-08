//terrible implementation but it works

function findTheMissingLetter(array: string[]) {
	const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const lowerChars = 'abcdefghijklmnopqrstuvwxyz'

	const upperScore = upperChars
		.split('')
		.reduce((acc: Map<string, number>, curr, idx) => {
			acc.set(curr, idx + 1)

			return acc
		}, new Map())

	const lowerScore = lowerChars
		.split('')
		.reduce((acc: Map<string, number>, curr, idx) => {
			acc.set(curr, idx + 1)

			return acc
		}, new Map())

	for (let i = 0; i < array.length; i += 1) {
		if (array[i].toLowerCase() === array[i]) {
			const first = lowerScore.get(array[i]) ?? Infinity
			const second = lowerScore.get(array[i + 1]) ?? Infinity
			if (second - first !== 1) {
				const inverseLowerMap = Object.entries(Object.fromEntries(lowerScore)).reduce(
					(acc: Map<number, string>, curr: [string, number]) => {
						acc.set(curr[1], curr[0])

						return acc
					},
					new Map()
				)
				return inverseLowerMap.get(second - 1)
			}
		} else {
			const first = upperScore.get(array[i]) ?? Infinity
			const second = upperScore.get(array[i + 1]) ?? Infinity
			if (second - first !== 1) {
				const inverseUpperMap = Object.entries(Object.fromEntries(upperScore)).reduce(
					(acc: Map<number, string>, curr: [string, number]) => {
						acc.set(curr[1], curr[0])

						return acc
					},
					new Map()
				)
				return inverseUpperMap.get(second - 1)
			}
		}
	}
}

console.log(findTheMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findTheMissingLetter(['O', 'Q', 'R', 'S']))
