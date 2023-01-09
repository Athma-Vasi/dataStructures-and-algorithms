function howMuchILoveYou(petals: number) {
	const remainder = petals % 6

	switch (remainder) {
		case 1: {
			return 'I love you'
		}
		case 2: {
			return 'a little'
		}
		case 3: {
			return 'a lot'
		}
		case 4: {
			return 'passionately'
		}
		case 5: {
			return 'madly'
		}
		default: {
			return 'not at all'
		}
	}
}

export { howMuchILoveYou }
