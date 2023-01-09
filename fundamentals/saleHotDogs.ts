function saleHotDogs(n: number) {
	return n >= 10 ? 90 * n : n >= 5 ? 95 * n : 100 * n
}

export { saleHotDogs }
