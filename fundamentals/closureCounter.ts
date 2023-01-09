function closureCounter() {
	let start = 0

	return function () {
		start += 1

		return start
	}
}

export { closureCounter }
