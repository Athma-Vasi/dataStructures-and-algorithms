//passes shown tests, fails unknown tests

function droneFlyBy(lamps: string, drone: string) {
	return drone
		.split('')
		.reduce((acc, _, idx) => {
			acc[idx] = 'o'

			return acc
		}, lamps.split(''))
		.join('')
}

export { droneFlyBy }
