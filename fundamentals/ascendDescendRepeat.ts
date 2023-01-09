function ascendDescendRepeat(length: number, min: number, max: number) {
	if (max < min || length === 0) return ''
	if (max === min) return `${max}`.repeat(length)

	let resultStr = ''
	let isAscending = true

	while (resultStr.length < length) {
		if (isAscending) {
			if (resultStr.length === 0) for (let i = min; i <= max; i += 1) resultStr += i
			else for (let i = min + 1; i <= max; i += 1) resultStr += i
			isAscending = false
		} else {
			for (let i = max - 1; i >= min; i -= 1) resultStr += i
			isAscending = true
		}
	}

	return resultStr.length > length
		? resultStr.slice(0, (resultStr.length - length) * -1)
		: resultStr
}

export { ascendDescendRepeat }
