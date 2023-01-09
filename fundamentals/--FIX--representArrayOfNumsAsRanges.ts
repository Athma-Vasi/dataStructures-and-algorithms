function toRange(arr: number[]) {
	let nums = Array.from(new Set(arr))
	nums = nums.sort((a, b) => a - b)

	let result = ''
	let inRange = false

	// for (let i = 1; i < nums.length; i += 1) {
	// 	if (nums[i] - nums[i - 1] === 1) {
	// 		inRange ? result : (result += `${nums[i - 1]}_`)
	// 		inRange = true
	// 	} else {
	// 		result += `${nums[i - 1]},${nums[i]}`
	// 		inRange = false
	// 	}
	// }

	//FIX v
	nums.forEach((num, idx) => {
		if (idx > 0 && idx !== nums.length - 1) {
			if (num - nums[idx - 1] === 1) {
				inRange ? result : (result += `${nums[idx - 1]}_`)
				inRange = true
			} else {
				inRange ? (result += `${nums[idx - 1]},`) : (result += `${num},`)

				inRange = false
			}
		} else if (idx === nums.length - 1) result += `${num}`
	})
	//FIX ^

	return result
}

console.log(toRange([3, 4, 5, 6, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 23, 24]))

function toArray(str: string) {
	const strArr = str.split(',')
	const [ranges, indNums] = strArr.reduce(
		(acc: [string[], number[]], currStr) => {
			currStr.includes('-') ? acc[0].push(currStr) : acc[1].push(Number(currStr))

			return acc
		},
		[[], []]
	)

	const rangeNums = ranges.reduce((acc: number[], curr) => {
		const [startRange_, endRange_] = curr.split('-')
		const startRange = Number(startRange_)
		const endRange = Number(endRange_)

		for (let i = startRange; i <= endRange; i += 1) acc.push(i)

		return acc
	}, [])

	return [...rangeNums, ...indNums].sort((a, b) => a - b)
}

console.log(toArray('3-6,9,10,11,13-17,18,19'))
