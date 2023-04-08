function productArray(nums: number[]) {
	return nums.reduce((acc: number[], _, idx) => {
		let temp = 1
		nums.forEach((val_, idx_) => {
			if (idx_ !== idx) {
				temp *= val_
			}
		})
		acc.push(temp)

		return acc
	}, [])
}

export { productArray }
