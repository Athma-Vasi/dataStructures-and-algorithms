function findTheMedian(n: number[]) {
	const length = n.length
	const midIdx = length % 2 === 0 ? length / 2 : Math.floor(length / 2)
	const midIdx1 = length % 2 === 0 ? length / 2 - 1 : null
	const nSorted = [...n].sort((a, b) => a - b)

	return midIdx1 !== null ? (nSorted[midIdx] + nSorted[midIdx1]) / 2 : nSorted[midIdx]
}

export { findTheMedian }
