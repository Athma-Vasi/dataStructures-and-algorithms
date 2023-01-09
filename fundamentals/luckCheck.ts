//passes all tests except fixed test with unknown args

function luckCheck(ticket: string) {
	if (
		ticket === '' ||
		ticket
			.split('')
			.map((char) => Number.isNaN(Number(char)))
			.includes(true)
	)
		throw new Error('One or more chars in ticket is not a number')

	const length = ticket.length
	const isEvenLength = length % 2 === 0

	let leftHalf: string
	let rightHalf: string

	isEvenLength
		? (leftHalf = ticket.slice(0, length / 2))
		: (leftHalf = ticket.slice(0, Math.floor(length / 2)))

	isEvenLength
		? (rightHalf = ticket.slice(length / 2))
		: (rightHalf = ticket.slice(Math.floor(length / 2) + 1))

	const leftSum = leftHalf.split('').reduce((acc, curr) => (acc += Number(curr)), 0)
	const rightSum = rightHalf.split('').reduce((acc, curr) => (acc += Number(curr)), 0)

	return leftSum === rightSum
}

console.log(luckCheck('003111'))
console.log(luckCheck('17935'))
console.log(luckCheck('absudi899'))
