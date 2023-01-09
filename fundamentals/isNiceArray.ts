//fails unspecified random tests

function isNiceArray(arr: number[]) {
	const boolArr: boolean[] = []

	for (const [_, val] of arr.entries()) {
		const temp: boolean[] = []
		for (const [_, val_] of arr.entries()) {
			if (val_ === val + 1 || val_ === val - 1) temp.push(true)
		}
		temp.includes(true) ? boolArr.push(true) : boolArr.push(false)
	}

	return boolArr.includes(false) ? false : true
}

export { isNiceArray }
