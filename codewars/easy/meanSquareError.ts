function meanSquareError(arr1: number[], arr2: number[]) {
	return (
		arr1
			.reduce((acc: number[], num, idx) => {
				const diff = Math.abs(num - arr2[idx])
				acc.push(diff * diff)

				return acc
			}, [])
			.reduce((acc, num) => (acc += num), 0) / arr2.length
	)
}

export { meanSquareError }
