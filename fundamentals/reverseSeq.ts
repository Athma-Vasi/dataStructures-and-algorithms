function reverseSeq(num: number): number[] {
	const temp: number[] = []
	for (let i = num; i >= 1; i -= 1) {
		temp.push(i)
	}
	return temp
}

export { reverseSeq }
