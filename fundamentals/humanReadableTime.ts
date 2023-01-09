function humanReadableTime(seconds: number) {
	const hrs = Math.floor(seconds / 3600)
	const mins = Math.floor((seconds % 3600) / 60)
	const secs = seconds - (hrs * 3600 + mins * 60)

	return `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}:${
		secs < 10 ? '0' + secs : secs
	}`
}

export { humanReadableTime }
