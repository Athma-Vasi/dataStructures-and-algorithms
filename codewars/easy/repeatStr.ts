function repeatStr(n: number, s: string): string {
	let temp = ''
	for (let i = 1; i <= n; i += 1) {
		temp += s
	}
	return temp
}

export { repeatStr }
