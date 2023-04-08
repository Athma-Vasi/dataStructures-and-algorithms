function holiday6Shark(
	pontoonDistance: number,
	sharkDistance: number,
	yourSpeed: number,
	sharkSpeed: number,
	dolphin: boolean
) {
	return dolphin
		? sharkDistance / (sharkSpeed * 0.5) > pontoonDistance / yourSpeed
			? 'Alive!'
			: 'Shark Bait!'
		: sharkDistance / sharkSpeed > pontoonDistance / yourSpeed
		? 'Alive!'
		: 'Shark Bait!'
}

export { holiday6Shark }
