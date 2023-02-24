function stairsClimbedIn20Yrs(stairs: number[][]) {
	return (
		stairs.reduce((acc, curr) => {
			curr.forEach((value) => (acc += value))

			return acc
		}, 0) * 20
	)
}

export { stairsClimbedIn20Yrs }
