function fruitMachine(reels: string[][], spins: number[]) {
	if (spins.reduce((acc, curr) => (acc += curr), 0) === 0) return 100

	const reel = [
		'Wild',
		'Star',
		'Bell',
		'Shell',
		'Seven',
		'Cherry',
		'Bar',
		'King',
		'Queen',
		'Jack',
	]

	//adds scores for three of the same
	let threeScore = 100
	const addThreeScoreMap = reel.reduce((acc: Map<string, number>, curr) => {
		const temp: string[] = []
		temp.push(curr)
		temp.push(curr)
		temp.push(curr)

		acc.set(`${temp}`, threeScore)
		threeScore -= 10

		return acc
	}, new Map())

	//adds scores for two of the same
	let twoScore = 10
	const addTwoScoreMap = reel.reduce((acc, curr) => {
		reel.forEach((item) => {
			if (item !== curr) {
				const comb1 = [curr, curr, item]
				const comb2 = [curr, item, curr]
				const comb3 = [item, curr, curr]

				acc.set(`${comb1}`, twoScore)
				acc.set(`${comb2}`, twoScore)
				acc.set(`${comb3}`, twoScore)
			}
		})
		twoScore -= 1

		return acc
	}, addThreeScoreMap)

	//adds scores for two of the same plus 'Wild'
	let wildScore = 20
	const addSameTwoPlusWild = reel.reduce((acc, curr) => {
		if (curr !== 'Wild') {
			const comb1 = [curr, curr, 'Wild']
			const comb2 = [curr, 'Wild', curr]
			const comb3 = ['Wild', curr, curr]

			acc.set(`${comb1}`, wildScore)
			acc.set(`${comb2}`, wildScore)
			acc.set(`${comb3}`, wildScore)
		}
		wildScore -= 2

		return acc
	}, addTwoScoreMap)

	const one = reels[0][spins[0]]
	const two = reels[1][spins[1]]
	const three = reels[2][spins[2]]

	return addSameTwoPlusWild.get(`${one},${two},${three}`) ?? 0
}

export { fruitMachine }
