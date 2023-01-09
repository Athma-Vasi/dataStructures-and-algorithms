function foldAnArray(array: number[], runs: number) {
	if (array.length === 1) return array

	let cloneArr: number[] = [...array]

	let left: number[] = []
	let mid: number | null = null
	let right: number[] = []

	let folds = runs

	while (folds > 0) {
		const isEvenLength = cloneArr.length % 2 === 0

		mid = isEvenLength ? null : cloneArr[Math.floor(cloneArr.length / 2)]

		left = isEvenLength
			? cloneArr.slice(0, cloneArr.length / 2)
			: cloneArr.slice(0, Math.floor(cloneArr.length / 2))

		right = isEvenLength
			? cloneArr.slice(cloneArr.length / 2)
			: cloneArr.slice(Math.floor(cloneArr.length / 2) + 1)

		const lengths = left.length - 1
		const tempArr = right.reduceRight((acc: number[], curr, idx) => {
			acc.push(curr + left[Math.abs(idx - lengths)])

			return acc
		}, [])

		mid === null ? tempArr : tempArr.push(mid)
		cloneArr = tempArr

		folds -= 1
	}

	return cloneArr
}

export { foldAnArray }

// recursive solution by 'arcanistcat'
/*
export function foldArray(array: number[], runs: number): number[] {
	array = [...array]

	if (!array.length) return []

	if (runs <= 0) return array

	const odd = array.length % 2 ? array.splice(array.length / 2, 1)[0] : undefined

	const a = array.slice(0, array.length / 2)
	const b = array.slice(array.length / 2).reverse()

	const r = a.map((x, i) => x + b[i])

	if (typeof odd === 'number') r.push(odd)

	return foldArray(r, runs - 1)
}
*/
