//works but times out...need to optimize time complexity

function arrayDiffVeryFast(a: number[], b: number[]) {
	const aLength = a.length
	const bLength = b.length

	let i = 0
	let j = 0
	const finalArr: number[] = []

	while (i < aLength) {
		const boolArr: boolean[] = []

		while (j < bLength) {
			b[j] === a[i] ? boolArr.push(true) : boolArr.push(false)
			j += 1
		}

		boolArr.includes(true) ? finalArr : finalArr.push(a[i])
		i += 1
		j = 0
	}

	return finalArr
}

// console.log(arrayDiffVeryFast([1, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5]))

const bigArr = Array.from({ length: 5_000_000 }).map((_, idx) => idx)
const smallArr = Array.from({ length: 50 }).map(() => Math.floor(Math.random() * 100))
console.log(smallArr)

console.log(arrayDiffVeryFast(bigArr, smallArr))
