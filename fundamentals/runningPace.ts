function runningPace(d: number, t: string) {
	const [min, sec] = t.split(':')
	const timeInSecs = Number(min) * 60 + Number(sec)

	const pace = timeInSecs / d
	const minPace = Math.floor(pace / 60)
	const secPace = pace % 60

	return `${minPace}:${
		secPace.toString().length === 1
			? '0' + secPace
			: secPace.toString().length === 2
			? secPace
			: secPace.toString().split('.')[0].length === 1
			? '0' + secPace.toString().split('.')[0]
			: secPace.toString().split('.')[0]
	}`
}

export { runningPace }
