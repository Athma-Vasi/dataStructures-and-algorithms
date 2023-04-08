//don't understand the problem statement

function harmoniousArray(heights: number[][], tolerance: number) {
	return heights
		.reduce((acc: number[][], curr: number[]) => {
			const max = Math.max(...curr)
			const min = Math.min(...curr)

			max - min <= tolerance ? acc.push(curr) : acc
			return acc
		}, [])
		.sort((a: number[], b: number[]) => b.length - a.length)[0].length
}

export { harmoniousArray }
