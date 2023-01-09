//random test fails - test returns empty [] when function signature
//indicates string[] is to be returned
function playingCardsDrawOrder1(deck: string[]): string[] {
	const clone = [...deck]
	const drawnArr: string[] = []

	while (clone[0] !== '') {
		const drawn = clone.shift() ?? ''
		drawnArr.push(drawn)
		const last = clone === [] ? null : clone.shift() ?? ''
		clone.push(last ?? '')
	}

	return drawnArr
}

export { playingCardsDrawOrder1 }
