function reverseOrRotate(s: string, sz: number) {
	if (sz <= 0 || s === '' || sz > s.length) return ''

	const subStrArr: string[] = []
	for (let i = 0; i < s.length; i += sz) {
		const slicedStr = s.slice(i, i + sz)
		slicedStr.length < sz ? slicedStr : subStrArr.push(slicedStr)
	}

	return subStrArr.reduce((acc, curr) => {
		let temp = 0
		curr.split('').forEach((digit) => (temp += Number(digit) ** 3))

		temp % 2 === 0
			? (acc += curr.split('').reverse().join(''))
			: (acc += `${curr.slice(1)}${curr[0]}`)

		return acc
	}, '')
}

export { reverseOrRotate }
