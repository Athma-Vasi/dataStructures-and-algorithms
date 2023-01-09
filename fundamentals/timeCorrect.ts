function timeCorrect(timestring: string | null) {
	if (timestring === '') return ''
	if (timestring === null) return null
	if (!timestring.includes(':')) return null

	const [hrs_, mins_, secs_] = timestring?.split(':')
	let hrs = Number(hrs_)
	let mins = Number(mins_)
	let secs = Number(secs_)

	if (Number.isNaN(hrs) || Number.isNaN(mins) || Number.isNaN(secs)) return null

	let secsRemainder = Infinity
	let minsRemainder = Infinity
	let hrsRemainder = Infinity

	if (secs >= 60) {
		secsRemainder = secs - 60
		secs = secsRemainder
		secs = secs === 60 ? 0 : secs
		mins += 1
	}
	if (mins >= 60) {
		minsRemainder = mins - 60
		mins = minsRemainder
		mins = mins === 60 ? 0 : mins
		hrs += 1
	}
	if (hrs >= 24) {
		hrsRemainder = hrs % 24
		hrs = hrsRemainder
		hrs = hrs === 24 ? 0 : hrs
	}

	return `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}:${
		secs < 10 ? '0' + secs : secs
	}`
}

export { timeCorrect }
