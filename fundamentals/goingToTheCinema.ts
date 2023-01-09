//fails goingToCinema(100,10,0.95)

function goingToTheCinema(card: number, ticket: number, perc: number) {
	let ticketPrice = ticket
	let cardPrice = card
	let trips = 1

	do {
		ticketPrice += ticket
		cardPrice += ticket * perc ** trips

		trips += 1
	} while (ticketPrice < Math.ceil(cardPrice))

	return trips
}

export { goingToTheCinema }
