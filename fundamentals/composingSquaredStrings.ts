function composingSquaredStrings(s1: string, s2: string) {
	const s1Arr = s1.split('\n')
	const s2Arr = s2.split('\n')

	const result: string[] = []
	for (let i = 1; i <= s1Arr.length; i += 1) {
		let temp = ''
		for (let j = 0; j < i; j += 1) {
			temp += s1Arr[i - 1][j]
		}

		for (let k = i; k < i + 1; k += 1) {
			let temp_ = ''
			const s2Str = s2Arr[Math.abs(k - s2Arr.length)]

			for (let l = 0; l <= s2Str.length - i; l += 1) {
				temp_ += s2Str[l]
			}
			temp += temp_
		}

		result.push(temp)
	}

	return result.join('\n')
}

export { composingSquaredStrings }
