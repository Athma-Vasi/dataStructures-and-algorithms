//doesnt work and dont really care why

function minimumSteps(nums: number[], value: number) {
	let count = 0
	let result = 0
	let index = 0

	const numsSorted = nums.sort((a, b) => a - b)
	while (result < value) {
		numsSorted.forEach((val_, idx) => {
			if (idx === index) {
				result += val_
				count += 1
				index += 1
			}
		})
	}

	return count
}

export { minimumSteps }
