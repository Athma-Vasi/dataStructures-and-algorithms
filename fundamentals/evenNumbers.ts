function evenNumbers(array: number[], n: number) {
	return array
		.reduce((acc: number[], curr) => {
			curr % 2 === 0 ? acc.push(curr) : acc

			return acc
		}, [])
		.slice(-n)
}

export { evenNumbers }
