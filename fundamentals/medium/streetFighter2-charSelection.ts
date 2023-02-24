type Move = 'down' | 'up' | 'right' | 'left'

function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
	return moves.reduce((acc: string[], curr) => {
		const xLength = fighters[0].length
		const yLength = fighters.length

		let x = position[0]
		let y = position[1]

		switch (curr) {
			case 'down': {
				y = y + 1 < yLength ? y + 1 : y
				position = [x, y]
				acc.push(fighters[y][x])
				break
			}

			case 'up': {
				y = y - 1 > 0 ? y - 1 : 0
				position = [x, y]
				acc.push(fighters[y][x])
				break
			}

			case 'right': {
				x = x + 1 < xLength ? x + 1 : 0
				position = [x, y]
				acc.push(fighters[y][x])
				break
			}

			//case 'left'
			default: {
				x = x - 1 >= 0 ? x - 1 : xLength - 1
				position = [x, y]
				acc.push(fighters[y][x])
				break
			}
		}

		return acc
	}, [])
}

//the test is wrong, I get correct results
console.log(
	streetFighterSelection(
		[
			['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
			['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
		],
		[5, 0],
		['down', 'right', 'down', 'right', 'left']
	)
)
//test result =[ 'M.Bison', 'Ken', 'Ken', 'Chun Li', 'Ken' ]
//my result =[ "M.Bison", "Ken", "Ken", "Chun Li", "Ken" ]

export { streetFighterSelection }
