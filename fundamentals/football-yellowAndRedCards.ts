//fails random tests with unknown args

function menStillStanding(cards: string[]) {
	if (cards.length === 0) return [11, 11]

	//iterates over each string, parsing and creating a Map with team keys and
	//value of Map with playerNum keys and card value arr
	const teamsPlayersCardsMap = cards.reduce(
		(acc: Map<string, Map<string, string[]>>, curr) => {
			const [team, ...rest] = curr.split('')
			const [playerNum, card] = rest.reduce(
				(acc: [string, string], curr) => {
					Number.isNaN(Number(curr)) ? (acc[1] += curr) : (acc[0] += curr)

					return acc
				},
				['', '']
			)

			const playersCardsMap: Map<string, string[]> = acc.get(team) ?? new Map()
			const playerCard = playersCardsMap.get(playerNum) ?? []

			playerCard.push(card)
			playersCardsMap.set(playerNum, playerCard)
			acc.set(team, playersCardsMap)

			return acc
		},
		new Map()
	)

	// converts Map into a tuple and iterates over them decrementing the totalPlayers
	//accumulator according to the number of yellow and red cards
	return Array.from(teamsPlayersCardsMap).reduce(
		(
			totalPlayers: [number, number],
			[team, playersCardsMap]: [string, Map<string, string[]>]
		) => {
			if (team === 'A') {
				Array.from(playersCardsMap).forEach(([_, cards]: [string, string[]]) => {
					const [yellowCards, redCard] = cards.reduce(
						(acc: [number, number], curr) => {
							if (totalPlayers[0] > 6 && totalPlayers[1] > 6) {
								//only increments once for yellowCards > 2 and redCards > 1
								acc[0] > 2 ? acc[0] : curr === 'Y' ? (acc[0] += 1) : acc[0]
								acc[1] > 0 ? acc[1] : curr === 'R' ? (acc[1] += 1) : acc[1]
							}

							return acc
						},
						//[yellowCards, redCard]
						[0, 0]
					)

					yellowCards === 2 ? (totalPlayers[0] -= 1) : totalPlayers[0]
					redCard === 1 ? (totalPlayers[0] -= 1) : totalPlayers[0]
				})
			} else {
				Array.from(playersCardsMap).forEach(([_, cards]: [string, string[]]) => {
					const [yellowCards, redCard] = cards.reduce(
						(acc: [number, number], curr) => {
							if (totalPlayers[0] > 6 && totalPlayers[1] > 6) {
								//only increments once for yellowCards > 2 and redCards > 1
								acc[0] > 2 ? acc[0] : curr === 'Y' ? (acc[0] += 1) : acc[0]
								acc[1] > 0 ? acc[1] : curr === 'R' ? (acc[1] += 1) : acc[1]
							}

							return acc
						},
						//[yellowCards, redCard]
						[0, 0]
					)

					yellowCards === 2 ? (totalPlayers[1] -= 1) : totalPlayers[1]
					redCard === 1 ? (totalPlayers[1] -= 1) : totalPlayers[1]
				})
			}

			return totalPlayers
		},
		[11, 11]
	)
}

// console.log(menStillStanding(['A4Y', 'A4Y']))
// console.log(menStillStanding(['A4Y', 'A4R']))
console.log(menStillStanding(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y']))
// console.log(menStillStanding(['A4R', 'A4R', 'A4R'])) // [10,11]
console.log(menStillStanding(['A4R', 'A6R', 'A8R', 'A10R', 'A11R'])) // [6,11]
console.log(
	menStillStanding([
		'A5Y',
		'A7Y',
		'A9R',
		'B10R',
		'B10Y',
		'B11R',
		'B11Y',
		'B1R',
		'B3Y',
		'B3Y',
		'B5R',
		'B6Y',
		'B7R',
		'B7Y',
	])
)
