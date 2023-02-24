function checkCouponCode(
	enteredCode: string,
	correctCode: string,
	currentDate: string,
	expirationDate: string
) {
	const monthMap: Map<string, number> = new Map([
		['January', 1],
		['February', 2],
		['March', 3],
		['April', 4],
		['May', 5],
		['June', 6],
		['July', 7],
		['August', 8],
		['September', 9],
		['October', 10],
		['November', 11],
		['December', 12],
	])

	const currentYear = Number(currentDate.split(' ')[2])
	const currentMonth = monthMap.get(currentDate.split(' ')[0]) ?? 0
	const currentDay = Number(currentDate.split(' ')[1].split(',')[0])

	const expirationYear = Number(expirationDate.split(' ')[2])
	const expirationMonth = monthMap.get(expirationDate.split(' ')[0]) ?? 0
	const expirationDay = Number(expirationDate.split(' ')[1].split(',')[0])

	let isValidCode: boolean

	if (
		currentYear <= expirationYear &&
		currentMonth <= expirationMonth &&
		enteredCode === correctCode
	) {
		isValidCode = true
	} else if (
		currentYear === expirationYear &&
		currentMonth === expirationMonth &&
		currentDay <= expirationDay &&
		enteredCode === correctCode
	)
		isValidCode = true
	else isValidCode = false

	return [
		[currentDay, currentMonth, currentYear],
		[expirationDay, expirationMonth, expirationYear],
		[isValidCode],
	]
}

console.log(checkCouponCode('123', '123', 'September 5, 2014', 'October 1, 2014'))
console.log(checkCouponCode('123a', '123', 'September 5, 2014', 'October 1, 2014'))
