function gracefulTipping(bill: number) {
	const total = bill * 1.15

	if (total < 10) return Math.ceil(total)

	let tempTotal = total

	if (total < 100) while (Math.round(tempTotal) % 5 !== 0) tempTotal += 1
	else if (total < 1000) while (Math.round(tempTotal) % 50 !== 0) tempTotal += 1
	else if (total < 10000) while (Math.round(tempTotal) % 500 !== 0) tempTotal += 1
	else if (total < 100000) while (Math.round(tempTotal) % 5000 !== 0) tempTotal += 1
	else if (total < 1000000) while (Math.round(tempTotal) % 50000 !== 0) tempTotal += 1
	else if (total < 10000000) while (Math.round(tempTotal) % 500000 !== 0) tempTotal += 1

	return Math.round(tempTotal)
}

export { gracefulTipping }
