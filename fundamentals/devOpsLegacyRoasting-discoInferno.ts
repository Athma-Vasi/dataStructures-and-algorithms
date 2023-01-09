function discoInferno(workloads: string) {
	const legacyScore: Map<string, number> = new Map([
		['cobol', 1000],
		['nonobject', 500],
		['monolithic', 500],
		['fax', 100],
		['modem', 100],
		['thickclient', 50],
		['tape', 50],
		['floppy', 50],
		['oldschoolIT', 50],
	])
	const complaintsLower = 'slow! expensive! manual! down! hostage! security!'
	const complaintsUpper = 'SLOW! EXPENSIVE! MANUAL! DOWN! HOSTAGE! SECURITY!'

	let points = 0
	let numComplaints = 0

	legacyScore.forEach((score, term) => {
		const regexp = new RegExp(term.toLowerCase(), 'ig')
		const matchesArrays: RegExpMatchArray[] = [...workloads.matchAll(regexp)]
		const numOfMatches = matchesArrays.length
		const lowerCaseMatches: string[] = matchesArrays
			.flatMap((matches) => matches)
			.map((match) => match.toLowerCase())

		lowerCaseMatches.includes(term.toLowerCase())
			? (points += score * numOfMatches)
			: points
	})

	complaintsLower.split(' ').forEach((complaint) => {
		const regexp = new RegExp(complaint, 'g')
		const matchesArrays: RegExpMatchArray[] = [...workloads.matchAll(regexp)]
		const numOfMatches = matchesArrays.length

		workloads.includes(complaint) ? (numComplaints += numOfMatches) : numComplaints
	})

	complaintsUpper.split(' ').forEach((complaint) => {
		const regexp = new RegExp(complaint, 'g')
		const matchesArrays: RegExpMatchArray[] = [...workloads.matchAll(regexp)]
		const numOfMatches = matchesArrays.length

		workloads.includes(complaint) ? (numComplaints += numOfMatches) : numComplaints
	})

	return points === 0 && numComplaints === 0
		? 'These guys are already DevOps and in the Cloud and the business is happy!'
		: `Burn baby burn disco inferno ${points} points earned in this roasting and ${numComplaints} complaints resolved!`
}

export { discoInferno }
