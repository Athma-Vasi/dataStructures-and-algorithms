function moveZeroes(arr: unknown[]) {
	const [minusZeroes, zeroesArr] = arr.reduce(
		(acc: [unknown[], number[]], curr) => {
			curr === 0 ? acc[1].push(curr) : acc[0].push(curr)

			return acc
		},
		[[], []]
	)

	return [...minusZeroes, ...zeroesArr]
}

export { moveZeroes }
