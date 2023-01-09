function getRealFloor(n: number) {
	return n <= 0 ? n : n < 13 ? n - 1 : n - 2
}

export { getRealFloor }
