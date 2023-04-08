function remainder(n: number, m: number) {
	return n > m
		? m === 0
			? NaN
			: n % m
		: n < m
		? n === 0
			? NaN
			: m % n
		: n === 0 && m === 0
		? NaN
		: 0
}

export { remainder }
