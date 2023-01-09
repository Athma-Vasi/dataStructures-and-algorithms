//passes shown tests, but fails hidden 'sample tests' upon attempt

function mazeRunner(maze: number[][], directions: string[]) {
	const yLength = maze.length
	const xLength = maze[0].length

	const [startPoint, endPoint] = maze.reduce(
		(acc: [[number, number], [number, number]], curr, idx) => {
			const startIdx = curr.findIndex((num) => num === 2)
			const endIdx = curr.findIndex((num) => num === 3)

			if (startIdx > -1) {
				acc[0][0] = idx
				acc[0][1] = startIdx
			}
			if (endIdx > -1) {
				acc[1][0] = idx
				acc[1][1] = endIdx
			}

			return acc
		},
		[
			[0, 0],
			[0, 0],
		] // -> [[y, x], [y, x]]
	)

	let nextPoint = startPoint
	return directions.reduce((acc, curr, idx) => {
		if (startPoint === endPoint) return acc
		if (acc === 'Finish') return acc
		if (acc === 'Dead') return acc

		switch (curr) {
			case 'N': {
				nextPoint = [(nextPoint[0] -= 1), nextPoint[1]]
				if (nextPoint[0] === -1 || maze[nextPoint[0]][nextPoint[1]] === 1) acc = 'Dead'

				if (maze[nextPoint[0]][nextPoint[1]] === 3) acc = 'Finish'

				break
			}
			case 'S': {
				nextPoint = [(nextPoint[0] += 1), nextPoint[1]]
				if (nextPoint[0] === yLength - 1 || maze[nextPoint[0]][nextPoint[1]] === 1)
					acc = 'Dead'

				if (maze[nextPoint[0]][nextPoint[1]] === 3) acc = 'Finish'

				break
			}
			case 'E': {
				nextPoint = [nextPoint[0], (nextPoint[1] += 1)]
				if (nextPoint[1] === xLength - 1 || maze[nextPoint[0]][nextPoint[1]] === 1)
					acc = 'Dead'

				if (maze[nextPoint[0]][nextPoint[1]] === 3) acc = 'Finish'

				break
			}
			default: {
				nextPoint = [nextPoint[0], (nextPoint[1] -= 1)]
				if (nextPoint[1] === -1 || maze[nextPoint[0]][nextPoint[1]] === 1) acc = 'Dead'

				if (maze[nextPoint[0]][nextPoint[1]] === 3) acc = 'Finish'

				break
			}
		}

		return idx === directions.length - 1 && acc === '' ? 'Lost' : acc
	}, '')
}

/*
const maze1 = [
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 3],
	[1, 0, 1, 0, 1, 0, 1],
	[0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 2, 1, 0, 1, 0, 1],
]

console.log(mazeRunner(maze1, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']))
console.log(
	mazeRunner(maze1, [
		'N',
		'N',
		'N',
		'N',
		'N',
		'E',
		'E',
		'S',
		'S',
		'E',
		'E',
		'N',
		'N',
		'E',
	])
)
console.log(
	mazeRunner(maze1, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])
)

console.log(mazeRunner(maze1, ['N', 'N', 'N', 'W', 'W']))
console.log(
	mazeRunner(maze1, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])
)

console.log(mazeRunner(maze1, ['N', 'E', 'E', 'E', 'E']))
*/
export { mazeRunner }
