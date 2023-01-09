function isMerge(s: string, part1: string, part2: string) {
	if (part1 === '') if (s === part2) return true
	if (part2 === '') if (s === part1) return true

	return (
		Array.from({ length: s.length })
			.map(() => '')
			.reduce((acc, _, idx) => (acc += part1[idx] ?? '') && (acc += part2[idx] ?? ''), '')
			.split('')
			.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
			.join('') ===
		s
			.split('')
			.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
			.join('')
	)
}

console.log(isMerge('codewars', 'cdw', 'oears'))
console.log(isMerge('xcyc', 'xc', 'yc'))
console.log(isMerge('xcyc', 'yc', 'xc'))
console.log(isMerge('xcyc', 'xc', 'cy'))
console.log(isMerge('xcyc', 'cy', 'xc'))
console.log(isMerge('codewars', 'code', 'wars'))
console.log(isMerge('codewars', 'cdwr', 'oeas'))
console.log(isMerge('Making progress', 'Mak pross', 'inggre'))
console.log(`\nfalse below\n`)
console.log(isMerge('codewars', 'code', 'code'))
console.log(isMerge('More progress', 'More ess', 'pro'))
//fails this test
console.log(isMerge('codewars', 'code', 'wasr'))
