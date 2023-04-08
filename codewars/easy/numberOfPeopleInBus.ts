function numberOfPeopleInBus(busStops: [number, number][]): number {
	return busStops.reduce((acc, curr) => {
		acc += curr[0]
		acc -= curr[1]

		return acc
	}, 0)
}

export { numberOfPeopleInBus }
