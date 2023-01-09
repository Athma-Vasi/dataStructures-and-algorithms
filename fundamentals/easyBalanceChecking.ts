function easyBalanceChecking(book: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const numbers = '0123456789'
	const specialChars = '. '

	// '...' allows for easy ID of balance
	const newLineSplit = book.split('\n\n').join('...').split('\n')

	const filteredChars = newLineSplit
		.reduce((acc: string[], curr) => {
			curr.split(' ').forEach((val) => {
				val.split('').forEach((char) => {
					alphabet.includes(char.toLowerCase()) ||
					numbers.includes(char) ||
					specialChars.includes(char)
						? acc.push(char)
						: acc
				})

				acc.push(' ')
			})

			//',' allows for easy separation of each entry
			acc.push(',')

			return acc
		}, [])
		.join('')

	const balance = filteredChars.includes('...')
		? Number(filteredChars.split('...')[0])
		: Number(filteredChars.split(',')[0])

	//allows for consistent structure by removing balance
	let balanceRemoved = filteredChars.includes('...')
		? filteredChars.split('...').slice(1)
		: filteredChars.split(',').slice(1)

	//further adjusts structure for book that contains '\n\n'
	balanceRemoved =
		balanceRemoved.length === 1 ? balanceRemoved.join('').split(',') : balanceRemoved

	balanceRemoved = balanceRemoved.filter((elem) => elem !== '' && elem !== ' ')

	//removes trailing whitespace at each line
	balanceRemoved = balanceRemoved.reduce((acc: string[], curr) => {
		acc.push(curr.split('').slice(0, -1).join(''))

		return acc
	}, [])

	//adjusts all charges to the hundredth decimal
	balanceRemoved = balanceRemoved.reduce((acc: string[], curr) => {
		let charge = curr.split(' ')[curr.split(' ').length - 1]
		charge.split('.')[1].toString().length < 2 ? (charge += '0') : charge

		const curr_ = curr.split(' ').slice(0, -1)
		curr_.push(charge)

		acc.push(curr_.join(' '))

		return acc
	}, [])

	let newBalance = balance
	let totalExpense = 0
	//final calcs and formatting
	const balanceUpdated = balanceRemoved.reduce(
		(acc: string[], curr) => {
			let temp = curr
			temp += ' Balance '
			const charge = Number(curr.split(' ')[curr.split(' ').length - 1])
			newBalance = newBalance - charge
			temp += newBalance.toFixed(2)

			totalExpense += charge

			acc.push(temp)
			return acc
		},
		[`Original Balance: ${balance.toFixed(2)}`]
	)

	const averageExpense = totalExpense / balanceRemoved.length

	balanceUpdated.push(`Total expense  ${totalExpense.toFixed(2)}`)
	balanceUpdated.push(`Average expense  ${averageExpense.toFixed(2)}`)

	return balanceUpdated.join('\r\n')
}

export { easyBalanceChecking }

/*
const b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

const b1Sol =
	'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'

const b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

const b2sol =
	'Original Balance: 1233.00\r\n125 Hardware 24.80 Balance 1208.20\r\n123 Flowers 93.50 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.40 Balance 877.40\r\n122 Picture 93.50 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.60 Balance 751.30\r\n129 Fruits 17.60 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.60 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41'

const t0 = performance.now()
easyBalanceChecking(b1)
const t1 = performance.now()
console.log(`b1 took ${t1 - t0} seconds`)

const t2 = performance.now()
easyBalanceChecking(b2)
const t3 = performance.now()
console.log(`b2 took ${t3 - t2} seconds`)

//g964 solution:
function balance(book: string) {
	let totalExpense = 0,
		[originalBalance, ...entries] = book
			.trim()
			.replace(/[^a-z0-9\s.]+/gi, '')
			.replace(/\s{2,}/g, (m) => m[0])
			.split(/\n/)
	let current = parseFloat(originalBalance)
	entries = entries.map((row) =>
		row.replace(/\S+$/g, (m) => {
			totalExpense += parseFloat(m)
			return parseFloat(m).toFixed(2) + ' Balance ' + (current - totalExpense).toFixed(2)
		})
	)
	entries.unshift('Original Balance: ' + current.toFixed(2))
	entries.push('Total expense  ' + totalExpense.toFixed(2))
	entries.push('Average expense  ' + (totalExpense / (entries.length - 2)).toFixed(2))
	return entries.join('\r\n')
}

console.log('\n\n')

const t4 = performance.now()
balance(b1)
const t5 = performance.now()
console.log(`g964's b1 took ${t5 - t4} seconds`)

const t6 = performance.now()
balance(b2)
const t7 = performance.now()
console.log(`g964's b2 took ${t7 - t6} seconds`)
*/
