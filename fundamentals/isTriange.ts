function isTriange(a: number, b: number, c: number) {
	return a < 0 || b < 0 || c < 0
		? false
		: a + b > c && a + c > b && b + c > a
		? true
		: false
}

export { isTriange }
