//fails a test with unknown args

function trotter(n: number) {
	const set = new Set(n.toString())

	let x = 2
	let num = n

	if (x < 10) {
		while (set.size < 10) {
			num = x * n

			num
				.toString()
				.split('')
				.forEach((elem) => set.add(elem))

			x += 1
		}
	} else return 'INSOMNIA'

	return num
}

export { trotter }
