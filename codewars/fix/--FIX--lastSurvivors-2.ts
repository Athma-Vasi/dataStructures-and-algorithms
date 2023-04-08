function lastSurvivors2(str: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetScore = alphabet
		.split('')
		.reduce((acc: Map<string, number>, curr, idx) => {
			acc.set(curr, idx + 1)

			return acc
		}, new Map())

	let str_ = str
	//allows reset idx
	let i_ = 0
	let j_ = i_ + 1

	for (let i = i_; i < str_.length; i += 1) {
		for (let j = j_; j < str_.length; j += 1) {
			if (str_[i] === str_[j]) {
				if (str_[i] === 'z') {
					let tempArr: unknown[] = str_.split('')
					tempArr[i] = 'a'
					tempArr[j] = null
					tempArr = tempArr.filter((char) => char !== null)
					str_ = tempArr.join('')

					//reset idx to beginning
					i_ = 0
					j_ = i_ + 1
				} else {
					const currScore = alphabetScore.get(str_[i]) ?? 0 //only letters arg
					const newScore = currScore + 1
					const alphabetScoreArr = Object.entries(Object.fromEntries(alphabetScore))
					const isNextChar = (elem: [string, number]) => elem[1] === newScore
					const nextChar = alphabetScoreArr.filter(isNextChar)[0][0]

					let tempArr: unknown[] = str_.split('')
					tempArr[i] = nextChar
					tempArr[j] = null
					tempArr = tempArr.filter((char) => char !== null)
					str_ = tempArr.join('')

					//reset idx to beginning
					i_ = 0
					j_ = i_ + 1
				}
			}
		}
	}
	return str_
}
/*
let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
*/
console.log(lastSurvivors2('zzzab')) //cz
console.log(lastSurvivors2('abaa')) //ac
console.log(lastSurvivors2('zzab')) //c
