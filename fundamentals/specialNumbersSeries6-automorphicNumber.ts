function automorphicNumber(n: number) {
	const squared = n * n
	const numLength = n.toString().length

	return squared.toString().slice(-numLength) === n.toString() ? 'Automorphic' : 'Not!!'
}

export { automorphicNumber }
