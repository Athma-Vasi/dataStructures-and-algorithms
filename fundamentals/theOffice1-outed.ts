type Meeting = Record<string, number>

function office1Outed(meet: Meeting, boss: string) {
	let totalMembers = 0

	return Object.entries(meet).reduce((acc, [person, happiness]: [string, number]) => {
		person === boss ? (acc += happiness * 2) : (acc += happiness)
		totalMembers += 1

		return acc
	}, 0) /
		totalMembers <=
		5
		? 'Get Out Now!'
		: 'Nice Work Champ!'
}

export { office1Outed }
