//fails random tests with unknown args

function findAChair(rooms: [string, number][], need: number) {
	if (need === 0) return 'Game On'

	const chairsTakenFromEachRoom = rooms.reduce(
		(acc: number[], [filledChairs, totalChairs]: [string, number]) => {
			const numOfFilledChairs = filledChairs.length
			const availChairs =
				totalChairs - numOfFilledChairs < 0 ? 0 : totalChairs - numOfFilledChairs

			acc.reduce(
				(totalChairsTaken, chairsTaken) => (totalChairsTaken += chairsTaken),
				0
			) < need
				? acc.push(availChairs)
				: acc

			return acc
		},
		[]
	)

	const totalChairsTaken = chairsTakenFromEachRoom.reduce((acc, curr) => (acc += curr), 0)

	return totalChairsTaken === 0 ? 'Not enough!' : chairsTakenFromEachRoom
}

export { findAChair }
