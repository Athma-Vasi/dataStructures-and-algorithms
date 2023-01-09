function balanceStatements(str: string) {
	const statusCheck = 'SB'

	const sortedStocks = str.split(', ').reduce((acc: Map<string, string[]>, curr) => {
		let failsCheck = false
		const [quote, quantity, price, status] = curr.split(' ')

		quote === undefined || quote.includes(' ') ? (failsCheck = true) : failsCheck
		quantity === undefined || quantity.includes('.') ? (failsCheck = true) : failsCheck
		price === undefined || !price.includes('.') ? (failsCheck = true) : failsCheck
		status === undefined || !statusCheck.includes(status)
			? (failsCheck = true)
			: failsCheck

		const failedItems: string[] = acc.get('bad') ?? []
		const itemsToBuy: string[] = acc.get('buy') ?? []
		const itemsToSell: string[] = acc.get('sell') ?? []

		failsCheck ? failedItems.push(curr) : acc
		acc.set('bad', failedItems)

		!failsCheck
			? status.includes('B')
				? failedItems.includes(curr)
					? acc
					: itemsToBuy.push(curr)
				: acc
			: acc
		acc.set('buy', itemsToBuy)

		!failsCheck
			? status.includes('S')
				? failedItems.includes(curr)
					? acc
					: itemsToSell.push(curr)
				: acc
			: acc
		acc.set('sell', itemsToSell)

		return acc
	}, new Map())

	let buyAmount = 0
	let sellAmount = 0
	const badAmount = sortedStocks.get('bad')?.length ?? 0

	return Object.entries(Object.fromEntries(sortedStocks)).reduce(
		(acc, [status_, orders]: [string, string[]]) => {
			orders.forEach((order) => {
				const [_, quantity, price, __] = order.split(' ')

				status_ === 'buy'
					? (buyAmount += Number(quantity) * Number(price))
					: status_ === 'sell'
					? (sellAmount += Number(quantity) * Number(price))
					: status_
			})

			acc = `Buy: ${Math.round(buyAmount)} Sell: ${Math.round(sellAmount)}`
			acc +=
				Math.round(buyAmount) === 0 && Math.round(sellAmount) === 0
					? ''
					: badAmount === 1
					? `; Badly formed ${badAmount}: ${sortedStocks.get('bad')?.join('')} ;`
					: badAmount > 1
					? `; Badly formed ${badAmount}: ${sortedStocks.get('bad')?.join(' ;')} ;`
					: badAmount === null || undefined
					? ''
					: ''

			return acc
		},
		''
	)
}

let l: string, sol: string
l = 'GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S'
sol = 'Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;'
// console.table(balanceStatements(l) === sol)

l = 'GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S'
sol = 'Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;'
// console.table(balanceStatements(l) === sol)

//this one breaks
l = 'ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S'
sol = 'Buy: 0 Sell: 26041; Badly formed 1: ZNGA 1300 2.66 ;'
console.table(balanceStatements(l) === sol)
