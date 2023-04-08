//fails unknown edge cases

function hollowArray(x: number[]) {
	if (x.length < 5) return false
	if (x.length % 2 === 0) return false

	const mid = Math.floor(x.length / 2)
	const left = mid - 1
	const right = mid + 1

	if (x[left] !== 0 || x[mid] !== 0 || x[right] !== 0) return false

	//allows check of 'other' values that are not zero
	const x_: Array<number | null> = [...x]
	x_[left] = null
	x_[mid] = null
	x_[right] = null

	const boolArr = x_.map((n) => (n === 0 ? true : false))

	if (boolArr.includes(true)) return false

	return true
}

export { hollowArray }
