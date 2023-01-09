function warnTheSheep(queue: string[]) {
	return queue.reduceRight((acc, curr, idx) => {
		console.log('idx', idx)
		if (idx === queue.length - 1 && curr === 'wolf') {
			acc = 'Pls go away and stop eating my sheep'
		} else if (curr === 'wolf') {
			acc = `Oi! Sheep number ${
				queue.length - 1 - idx
			}! You are about to be eaten by a wolf!`
		}

		return acc
	}, '')
}
