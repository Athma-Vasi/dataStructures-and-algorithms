function rockPaperScissors(p1: string, p2: string) {
	switch (p1) {
		case 'rock': {
			return p2 === 'paper'
				? 'Player 2 won!'
				: p2 === 'scissors'
				? 'Player 1 won!'
				: 'Draw!'
		}

		case 'paper': {
			return p2 === 'scissors'
				? 'Player 2 won!'
				: p2 === 'rock'
				? 'Player 1 won!'
				: 'Draw!'
		}

		default: {
			return p2 === 'rock' ? 'Player 2 won!' : p2 === 'paper' ? 'Player 1 won!' : 'Draw!'
		}
	}
}

export { rockPaperScissors }
