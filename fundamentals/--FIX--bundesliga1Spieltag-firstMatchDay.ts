//fails randomtests but my answer === correct answer!!

function bundesligaFirstMatchDayTable(results: string[]) {
	//creates a Map<teamnames, Map<data, points>>
	const teamsScoreTable = results.reduce(
		(acc: Map<string, Map<string, number>>, curr) => {
			const [first, team2] = curr.split(' - ')
			const [score, ...rest] = first.split(' ')
			const team1 = rest.join(' ')
			const [team1Score_, team2Score_] = score.split(':')
			const team1Score = Number.isNaN(Number(team1Score_))
				? Infinity
				: Number(team1Score_)
			const team2Score = Number.isNaN(Number(team2Score_))
				? Infinity
				: Number(team2Score_)

			const team1Data: Map<string, number> = acc.get(team1) ?? new Map()
			const team2Data: Map<string, number> = acc.get(team2) ?? new Map()

			let team1MatchesPlayed = team1Data.get('matchesPlayed') ?? 0
			let team2MatchesPlayed = team2Data.get('matchesPlayed') ?? 0
			team1Data.set(
				'matchesPlayed',
				team1Score === Infinity ? (team1MatchesPlayed += 0) : (team1MatchesPlayed += 1)
			)
			team2Data.set(
				'matchesPlayed',
				team2Score === Infinity ? (team2MatchesPlayed += 0) : (team2MatchesPlayed += 1)
			)

			let team1MatchesWon = team1Data.get('matchesWon') ?? 0
			let team2MatchesWon = team2Data.get('matchesWon') ?? 0
			if (
				team1Score !== Infinity &&
				team2Score !== Infinity &&
				team1Score !== team2Score
			) {
				team1Score > team2Score
					? team1Data.set('matchesWon', (team1MatchesWon += 1))
					: team2Data.set('matchesWon', (team2MatchesWon += 1))
			}

			let team1MatchesTied = team1Data.get('matchesTied') ?? 0
			let team2MatchesTied = team2Data.get('matchesTied') ?? 0
			if (team1Score !== Infinity && team2Score !== Infinity) {
				if (team1Score === team2Score) {
					team1Data.set('matchesTied', (team1MatchesTied += 1))
					team2Data.set('matchesTied', (team2MatchesTied += 1))
				}
			}

			let team1MatchesLost = team1Data.get('matchesLost') ?? 0
			let team2MatchesLost = team2Data.get('matchesLost') ?? 0
			if (
				team1Score !== Infinity &&
				team2Score !== Infinity &&
				team1Score !== team2Score
			) {
				team1Score < team2Score
					? team1Data.set('matchesLost', (team1MatchesLost += 1))
					: team2Data.set('matchesLost', (team2MatchesLost += 1))
			}

			let team1GoalsScored = team1Data.get('goalsScored') ?? 0
			let team1GoalsScoredAgainst = team1Data.get('goalsScoredAgainst') ?? 0
			let team2GoalsScored = team2Data.get('goalsScored') ?? 0
			let team2GoalsScoredAgainst = team2Data.get('goalsScoredAgainst') ?? 0
			team1Data.set(
				'goalsScored',
				team1Score === Infinity
					? (team1GoalsScored += 0)
					: (team1GoalsScored += team1Score)
			)
			team1Data.set(
				'goalsScoredAgainst',
				team1Score === Infinity
					? (team1GoalsScoredAgainst += 0)
					: (team1GoalsScoredAgainst += team2Score)
			)
			team2Data.set(
				'goalsScored',
				team2Score === Infinity
					? (team2GoalsScored += 0)
					: (team2GoalsScored += team2Score)
			)
			team2Data.set(
				'goalsScoredAgainst',
				team2Score === Infinity
					? (team2GoalsScoredAgainst += 0)
					: (team2GoalsScoredAgainst += team1Score)
			)

			let team1TotalPoints = team1Data.get('totalPoints') ?? 0
			let team2TotalPoints = team2Data.get('totalPoints') ?? 0
			if (team1Score !== Infinity && team2Score !== Infinity) {
				team1Score > team2Score
					? team1Data.set('totalPoints', (team1TotalPoints += 3))
					: team1Score < team2Score
					? team2Data.set('totalPoints', (team2TotalPoints += 3))
					: team1Data.set('totalPoints', (team1TotalPoints += 1)) &&
					  team2Data.set('totalPoints', (team2TotalPoints += 1))
			}

			acc.set(team1, team1Data)
			acc.set(team2, team2Data)

			return acc
		},
		new Map()
	)

	// enables easier sorting later down the line
	const unsortedTeamData = Object.entries(Object.fromEntries(teamsScoreTable)).reduce(
		(acc: string[][], [team, teamData]: [string, Map<string, number>]) => {
			const temp: string[] = []
			temp.push(team.padEnd(29, ' '))

			const matchesPlayed = teamData.get('matchesPlayed') ?? 0
			temp.push(`${matchesPlayed}`)
			temp.push('')

			const matchesWon = teamData.get('matchesWon') ?? 0
			temp.push(`${matchesWon}`)
			temp.push('')

			const matchesTied = teamData.get('matchesTied') ?? 0
			temp.push(`${matchesTied}`)
			temp.push('')

			const matchesLost = teamData.get('matchesLost') ?? 0
			temp.push(`${matchesLost}`)
			temp.push('')

			const goalsScored = teamData.get('goalsScored') ?? 0
			const goalsScoredAgainst = teamData.get('goalsScoredAgainst') ?? 0
			temp.push(`${goalsScored}:${goalsScoredAgainst}`)
			temp.push('')

			const totalPoints = teamData.get('totalPoints') ?? 0
			temp.push(`${totalPoints}`)

			acc.push(temp)

			return acc
		},
		[]
	)

	const sortedTeamData = unsortedTeamData.sort((a: string[], b: string[]) => {
		const aLength = a.length
		const bLength = b.length

		const aTeamName = a[0].trimEnd().toLowerCase()
		const bTeamName = b[0].trimEnd().toLowerCase()

		const aTotalPoints = Number(a[aLength - 1])
		const bTotalPoints = Number(b[bLength - 1])

		const [aGoalsScored_, aGoalsScoredAgainst_] = a[9].split(':')
		const aGoalsScored = Number(aGoalsScored_)
		const aGoalsScoredAgainst = Number(aGoalsScoredAgainst_)
		const aGoalsDiff = aGoalsScored - aGoalsScoredAgainst

		const [bGoalsScored_, bGoalsScoredAgainst_] = b[9].split(':')
		const bGoalsScored = Number(bGoalsScored_)
		const bGoalsScoredAgainst = Number(bGoalsScoredAgainst_)
		const bGoalsDiff = bGoalsScored - bGoalsScoredAgainst

		if (aTotalPoints === bTotalPoints) {
			if (aGoalsDiff === bGoalsDiff) {
				if (bGoalsScored === aGoalsScored)
					return aTeamName < bTeamName ? -1 : aTeamName > bTeamName ? 1 : 0
				else return bGoalsScored - aGoalsScored
			} else return bGoalsDiff - aGoalsDiff
		} else return bTotalPoints - aTotalPoints
	})

	// separate array is created for the custom prefix number logic
	// avoids having to write custom logic for the shifting idxs if the prefix is
	// prepended to the sorted arr
	let teamCount = 1
	const teamCountArr: number[] = []

	for (let i = 1; i < sortedTeamData.length; i += 1) {
		const team1GoalsSpread = sortedTeamData[i - 1][9]
		const [team1GoalsScored_, team1GoalsScoredAgainst_] = team1GoalsSpread.split(':')
		const team1GoalsScored = Number(team1GoalsScored_)
		const team1GoalsScoredAgainst = Number(team1GoalsScoredAgainst_)
		const team1GoalsDiff = team1GoalsScored - team1GoalsScoredAgainst

		const team2GoalsSpread = sortedTeamData[i][9]
		const [team2GoalsScored_, team2GoalsScoredAgainst_] = team2GoalsSpread.split(':')
		const team2GoalsScored = Number(team2GoalsScored_)
		const team2GoalsScoredAgainst = Number(team2GoalsScoredAgainst_)
		const team2GoalsDiff = team2GoalsScored - team2GoalsScoredAgainst

		if (team1GoalsDiff === team2GoalsDiff) {
			if (team1GoalsScored === team2GoalsScored) {
				if (i === 1) {
					teamCountArr.push(teamCount)
					teamCountArr.push(teamCount)
					teamCount += 1
				} else teamCountArr.push(teamCount)
			} else {
				teamCount = i + 1
				teamCountArr.push(teamCount)
			}
		} else {
			if (i === 1) {
				teamCountArr.push(teamCount)
				teamCount += 1
				teamCountArr.push(teamCount)
			} else {
				teamCount = i + 1
				teamCountArr.push(teamCount)
			}
		}
	}

	// prefix numbers are prepended into the sorted arr
	return sortedTeamData
		.reduce((acc: string[], curr: string[], idx) => {
			const temp: string[] = []
			const teamCount = teamCountArr[idx]

			temp.push(teamCount < 10 ? ` ${teamCount}. ` : `${teamCount}. `)
			temp.push(curr.join(' '))

			acc.push(temp.join(''))

			return acc
		}, [])
		.join('\n')
}
//
//
//
//
//
let results = [
	'6:0 FC Bayern Muenchen - Werder Bremen',
	'1:0 Eintracht Frankfurt - Schalke 04',
	'0:2 FC Augsburg - VfL Wolfsburg',
	'1:1 Hamburger SV - FC Ingolstadt',
	'2:0 1. FC Koeln - SV Darmstadt',
	'2:1 Borussia Dortmund - FSV Mainz 05',
	'2:1 Borussia Moenchengladbach - Bayer Leverkusen',
	'-:- Hertha BSC Berlin - SC Freiburg',
	'-:- TSG 1899 Hoffenheim - RasenBall Leipzig',
]

let expectedTable =
	' 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n' +
	' 2. 1. FC Koeln                   1  1  0  0  2:0  3\n' +
	' 2. VfL Wolfsburg                 1  1  0  0  2:0  3\n' +
	' 4. Borussia Dortmund             1  1  0  0  2:1  3\n' +
	' 4. Borussia Moenchengladbach     1  1  0  0  2:1  3\n' +
	' 6. Eintracht Frankfurt           1  1  0  0  1:0  3\n' +
	' 7. FC Ingolstadt                 1  0  1  0  1:1  1\n' +
	' 7. Hamburger SV                  1  0  1  0  1:1  1\n' +
	' 9. Hertha BSC Berlin             0  0  0  0  0:0  0\n' +
	' 9. RasenBall Leipzig             0  0  0  0  0:0  0\n' +
	' 9. SC Freiburg                   0  0  0  0  0:0  0\n' +
	' 9. TSG 1899 Hoffenheim           0  0  0  0  0:0  0\n' +
	'13. Bayer Leverkusen              1  0  0  1  1:2  0\n' +
	'13. FSV Mainz 05                  1  0  0  1  1:2  0\n' +
	'15. Schalke 04                    1  0  0  1  0:1  0\n' +
	'16. FC Augsburg                   1  0  0  1  0:2  0\n' +
	'16. SV Darmstadt                  1  0  0  1  0:2  0\n' +
	'18. Werder Bremen                 1  0  0  1  0:6  0'

// console.log(expectedTable + '\n')
console.log(bundesligaFirstMatchDayTable(results) === expectedTable)

results = [
	'6:0 FC Bayern Muenchen - Werder Bremen',
	'-:- Eintracht Frankfurt - Schalke 04',
	'-:- FC Augsburg - VfL Wolfsburg',
	'-:- Hamburger SV - FC Ingolstadt',
	'-:- 1. FC Koeln - SV Darmstadt',
	'-:- Borussia Dortmund - FSV Mainz 05',
	'-:- Borussia Moenchengladbach - Bayer Leverkusen',
	'-:- Hertha BSC Berlin - SC Freiburg',
	'-:- TSG 1899 Hoffenheim - RasenBall Leipzig',
]

expectedTable =
	' 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n' +
	' 2. 1. FC Koeln                   0  0  0  0  0:0  0\n' +
	' 2. Bayer Leverkusen              0  0  0  0  0:0  0\n' +
	' 2. Borussia Dortmund             0  0  0  0  0:0  0\n' +
	' 2. Borussia Moenchengladbach     0  0  0  0  0:0  0\n' +
	' 2. Eintracht Frankfurt           0  0  0  0  0:0  0\n' +
	' 2. FC Augsburg                   0  0  0  0  0:0  0\n' +
	' 2. FC Ingolstadt                 0  0  0  0  0:0  0\n' +
	' 2. FSV Mainz 05                  0  0  0  0  0:0  0\n' +
	' 2. Hamburger SV                  0  0  0  0  0:0  0\n' +
	' 2. Hertha BSC Berlin             0  0  0  0  0:0  0\n' +
	' 2. RasenBall Leipzig             0  0  0  0  0:0  0\n' +
	' 2. SC Freiburg                   0  0  0  0  0:0  0\n' +
	' 2. Schalke 04                    0  0  0  0  0:0  0\n' +
	' 2. SV Darmstadt                  0  0  0  0  0:0  0\n' +
	' 2. TSG 1899 Hoffenheim           0  0  0  0  0:0  0\n' +
	' 2. VfL Wolfsburg                 0  0  0  0  0:0  0\n' +
	'18. Werder Bremen                 1  0  0  1  0:6  0'

// console.log(expectedTable + '\n')
console.log(bundesligaFirstMatchDayTable(results) === expectedTable)

results = [
	'6:0 FC Bayern Muenchen - Werder Bremen',
	'1:0 Eintracht Frankfurt - Schalke 04',
	'0:2 FC Augsburg - VfL Wolfsburg',
	'1:1 Hamburger SV - FC Ingolstadt',
	'2:0 1. FC Koeln - SV Darmstadt',
	'2:1 Borussia Dortmund - FSV Mainz 05',
	'2:1 Borussia Moenchengladbach - Bayer Leverkusen',
	'2:1 Hertha BSC Berlin - SC Freiburg',
	'2:2 TSG 1899 Hoffenheim - RasenBall Leipzig',
]

expectedTable =
	' 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n' +
	' 2. 1. FC Koeln                   1  1  0  0  2:0  3\n' +
	' 2. VfL Wolfsburg                 1  1  0  0  2:0  3\n' +
	' 4. Borussia Dortmund             1  1  0  0  2:1  3\n' +
	' 4. Borussia Moenchengladbach     1  1  0  0  2:1  3\n' +
	' 4. Hertha BSC Berlin             1  1  0  0  2:1  3\n' +
	' 7. Eintracht Frankfurt           1  1  0  0  1:0  3\n' +
	' 8. RasenBall Leipzig             1  0  1  0  2:2  1\n' +
	' 8. TSG 1899 Hoffenheim           1  0  1  0  2:2  1\n' +
	'10. FC Ingolstadt                 1  0  1  0  1:1  1\n' +
	'10. Hamburger SV                  1  0  1  0  1:1  1\n' +
	'12. Bayer Leverkusen              1  0  0  1  1:2  0\n' +
	'12. FSV Mainz 05                  1  0  0  1  1:2  0\n' +
	'12. SC Freiburg                   1  0  0  1  1:2  0\n' +
	'15. Schalke 04                    1  0  0  1  0:1  0\n' +
	'16. FC Augsburg                   1  0  0  1  0:2  0\n' +
	'16. SV Darmstadt                  1  0  0  1  0:2  0\n' +
	'18. Werder Bremen                 1  0  0  1  0:6  0'

// console.log(expectedTable + '\n')
console.log(bundesligaFirstMatchDayTable(results) === expectedTable)

results = [
	'3:0 FC Bayern Muenchen - Werder Bremen',
	'0:4 Eintracht Frankfurt - Schalke 04',
	'4:1 FC Augsburg - VfL Wolfsburg',
	'2:4 Hamburger SV - FC Ingolstadt',
	'0:0 1. FC Koeln - SV Darmstadt',
	'5:4 Borussia Dortmund - FSV Mainz 05',
	'0:4 Borussia Moenchengladbach - Bayer Leverkusen',
	'2:3 Hertha BSC Berlin - SC Freiburg',
	'3:2 TSG 1899 Hoffenheim - RasenBall Leipzig]',
]

expectedTable =
	' 1. Bayer Leverkusen              1  1  0  0  4:0  3\n' +
	' 1. Schalke 04                    1  1  0  0  4:0  3\n' +
	' 3. FC Augsburg                   1  1  0  0  4:1  3\n' +
	' 4. FC Bayern Muenchen            1  1  0  0  3:0  3\n' +
	' 5. FC Ingolstadt                 1  1  0  0  4:2  3\n' +
	' 6. Borussia Dortmund             1  1  0  0  5:4  3\n' +
	' 7. SC Freiburg                   1  1  0  0  3:2  3\n' +
	' 7. TSG 1899 Hoffenheim           1  1  0  0  3:2  3\n' +
	' 9. 1. FC Koeln                   1  0  1  0  0:0  1\n' +
	' 9. SV Darmstadt                  1  0  1  0  0:0  1\n' +
	'11. FSV Mainz 05                  1  0  0  1  4:5  0\n' +
	'12. Hertha BSC Berlin             1  0  0  1  2:3  0\n' +
	'12. RasenBall Leipzig             1  0  0  1  2:3  0\n' +
	'14. Hamburger SV                  1  0  0  1  2:4  0\n' +
	'15. VfL Wolfsburg                 1  0  0  1  1:4  0\n' +
	'16. Werder Bremen                 1  0  0  1  0:3  0\n' +
	'17. Borussia Moenchengladbach     1  0  0  1  0:4  0\n' +
	'17. Eintracht Frankfurt           1  0  0  1  0:4  0'

console.log(expectedTable + '\n')
console.log(bundesligaFirstMatchDayTable(results))

/*
const lastIdxOfTeamWithEqualPoints: number[] = []
	for (let i = 1; i < unsortedTeamData.length; i += 1) {
		if (unsortedTeamData[i - 1][11] !== unsortedTeamData[i][11]) {
			lastIdxOfTeamWithEqualPoints.push(i - 1)
		}

		if (
			i === unsortedTeamData.length - 1 &&
			unsortedTeamData[i - 1][11] === unsortedTeamData[i][11]
		) {
			lastIdxOfTeamWithEqualPoints.push(i)
		}
	}

	let incr = 0
	let begin = 0
	let end = lastIdxOfTeamWithEqualPoints[incr]
	let teamCount = 1
	const teamCountArr: number[] = []
	// [5,7,17]
	while (incr < unsortedTeamData.length) {
		for (let i = begin + 1; i <= end; i += 1) {
			// const team1 = unsortedTeamData[i - 1]
			const team1GoalsSpread = unsortedTeamData[i - 1][9]
			const [team1GoalsScored_, team1GoalsScoredAgainst_] = team1GoalsSpread.split(':')
			const team1GoalsScored = Number(team1GoalsScored_)
			const team1GoalsScoredAgainst = Number(team1GoalsScoredAgainst_)
			const team1GoalsDiff = team1GoalsScored - team1GoalsScoredAgainst

			// const team2 = unsortedTeamData[i]
			const team2GoalsSpread = unsortedTeamData[i][9]
			const [team2GoalsScored_, team2GoalsScoredAgainst_] = team2GoalsSpread.split(':')
			const team2GoalsScored = Number(team2GoalsScored_)
			const team2GoalsScoredAgainst = Number(team2GoalsScoredAgainst_)
			const team2GoalsDiff = team2GoalsScored - team2GoalsScoredAgainst

			if (team1GoalsDiff === team2GoalsDiff) {
				if (team1GoalsScored === team2GoalsScored) {
					teamCountArr.push(teamCount)
				} else {
					teamCount = i + 1
					teamCountArr.push(teamCount)
				}
			} else {
				if (i === 1) {
					teamCountArr.push(teamCount)
					teamCount += 1
					teamCountArr.push(teamCount)
				} else {
					teamCount = i + 1
					teamCountArr.push(teamCount)
				}
			}
		}
		begin = lastIdxOfTeamWithEqualPoints[incr]
		incr += 1
		end = lastIdxOfTeamWithEqualPoints[incr]
	}
	*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
