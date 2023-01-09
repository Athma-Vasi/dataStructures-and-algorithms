function removeNMarks(s: string, n: number) {
	let num = n
	const strArr: (string | null)[] = s.split('')

	while (num > 0) {
		const exclMarkIdx = strArr.findIndex((str) => str === '!')
		strArr[exclMarkIdx] = null
		num -= 1
	}

	return strArr.filter((str) => str !== null).join('')
}

export { removeNMarks }
