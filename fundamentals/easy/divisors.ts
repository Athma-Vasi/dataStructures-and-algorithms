function divisors(n: number, factor = 0, count = 0): number {
	return factor === n
		? count
		: divisors(n, (factor += 1), n % factor === 0 ? (count += 1) : count)
}

export { divisors }
