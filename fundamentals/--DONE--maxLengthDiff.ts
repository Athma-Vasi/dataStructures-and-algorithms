function maxLengthDiff(a1: string[], a2: string[]) {
	if (a1.length === 0 || a2.length === 0) return -1
	let maxLengthDiff_ = -Infinity

	for (let i = 0; i < a1.length; i += 1) {
		for (let j = 0; j < a2.length; j += 1) {
			const absDiff = Math.abs(a1[i].length - a2[j].length)
			absDiff > maxLengthDiff_ ? (maxLengthDiff_ = absDiff) : maxLengthDiff_
		}
	}

	return maxLengthDiff_
}

console.log(
	maxLengthDiff(
		[
			'hoqq',
			'bbllkw',
			'oox',
			'ejjuyyy',
			'plmiis',
			'xxxzgpsssa',
			'xxwwkktt',
			'znnnnfqknaz',
			'qqquuhii',
			'dvvvwz',
		],
		['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
	)
)
