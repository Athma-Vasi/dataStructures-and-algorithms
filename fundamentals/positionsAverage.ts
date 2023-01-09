//I am getting 39 possibilities instead of 45 according to g964.

function positionsAverage(s: string) {
	const strArr = s.split(', ')
	let commonCount = 0

	for (let i = 0; i < strArr.length; i += 1) {
		for (let j = i; j < strArr.length; j += 1) {
			for (let k = 0; k < strArr[j].length; k += 1) {
				if (i !== j) strArr[i][k] === strArr[j][k] ? (commonCount += 1) : commonCount
			}
		}
	}

	const totalChars = strArr.reduce((acc, curr) => (acc += curr.length), 0)

	return (commonCount / totalChars) * 100
	// return [commonCount, totalChars]
}

const s = '466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096'
const s1 =
	'444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490'
const s2 =
	'449404, 099090, 600999, 694460, 996066, 906406, 644994, 699094, 064990, 696046'
console.log(positionsAverage(s)) // 26.666..
console.log(positionsAverage(s1)) // 29.259..
console.log(positionsAverage(s2)) // 24.444..
