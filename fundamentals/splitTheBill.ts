//fails unspecified random tests; passes sample tests

type Bill = { [k: string]: number }

function splitTheBill(x: Bill): Bill {
	const total = Object.entries(x).reduce((total, [_, amount]) => (total += amount), 0)
	const evenAmount = total / Object.keys(x).length

	return Object.entries(x).reduce((bill, [person, prevAmount]) => {
		const diff = prevAmount - evenAmount

		Object.defineProperty(bill, person, {
			value: diff,
			writable: true,
			enumerable: true,
			configurable: true,
		})

		return bill
	}, {})
}

export { splitTheBill }
