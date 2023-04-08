function add(x: number) {
	return function (y: number) {
		return x + y
	}
}

export { add }
