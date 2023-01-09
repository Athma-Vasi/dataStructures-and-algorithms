//only works on sample test in description

function josephusSurvivor(n: number, k: number) {
	let peoples: Array<number | null> = []
	for (let i = 1; i <= n; i += 1) peoples[i - 1] = i

	// let clone: Array<number | null> = [...peoples]
	let idx = k - 1
	let rem: number | null = 0
	let remPersons = peoples.filter((person) => person !== null).length

	while (remPersons > 1) {
		peoples[idx] = null
		peoples = peoples.filter((person) => person !== null)
		remPersons = peoples.length

		rem = idx + k > n ? idx + k - (n - 1) : null
		idx = rem === null ? idx + k : k - 1 - rem
	}

	return peoples[0]
}

export { josephusSurvivor }
