function findSheep1(num: number): string {
	if (num === 0) return ''

	let str = ''
	for (let i = 1; i <= num; i += 1) str += `${i} sheep...`
	return str
}

export { findSheep1 }
