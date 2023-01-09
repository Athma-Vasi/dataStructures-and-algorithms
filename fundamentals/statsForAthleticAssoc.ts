function statsForAthleticAssoc(s: string) {
	if (s === '') return ''

	const totalSecs = s.split(',').reduce((acc: number[], curr) => {
		let temp = 0
		curr
			.split('|')
			.forEach((val, idx) =>
				idx === 0
					? (temp += Number(val) * 3600)
					: idx === 1
					? (temp += Number(val) * 60)
					: (temp += Number(val))
			)
		acc.push(temp)

		return acc
	}, [])

	const rangeSecs = Math.max(...totalSecs) - Math.min(...totalSecs)
	const meanSecs = totalSecs.reduce((acc, curr) => (acc += curr), 0) / totalSecs.length
	const totalSecsSortedAsc = totalSecs.sort((a, b) => a - b)
	const medianSecs =
		totalSecsSortedAsc.length % 2 === 0
			? (totalSecsSortedAsc[totalSecsSortedAsc.length / 2 - 1] +
					totalSecsSortedAsc[totalSecsSortedAsc.length / 2]) /
			  2
			: totalSecsSortedAsc[Math.floor(totalSecsSortedAsc.length / 2)]

	const [rangeInHrs, rangeInMins, rangeInSecs] = secsToHrMinSecs(rangeSecs)
	const [meanInHrs, meanInMins, meanInSecs] = secsToHrMinSecs(meanSecs)
	const [medianInHrs, medianInMins, medianInSecs] = secsToHrMinSecs(medianSecs)

	return `Range: ${rangeInHrs < 10 ? '0' + rangeInHrs : rangeInHrs}|${
		rangeInMins < 10 ? '0' + rangeInMins : rangeInMins
	}|${rangeInSecs < 10 ? '0' + rangeInSecs : rangeInSecs} Average: ${
		meanInHrs < 10 ? '0' + meanInHrs : meanInHrs
	}|${meanInMins < 10 ? '0' + meanInMins : meanInMins}|${
		meanInSecs < 10 ? '0' + meanInSecs : meanInSecs
	} Median: ${medianInHrs < 10 ? '0' + medianInHrs : medianInHrs}|${
		medianInMins < 10 ? '0' + medianInMins : medianInMins
	}|${medianInSecs < 10 ? '0' + medianInSecs : medianInSecs}`

	/**
	 * returns [hrs, mins, secs]
	 */
	function secsToHrMinSecs(secs: number): [number, number, number] {
		return [
			Math.trunc(secs / 3600),
			Math.trunc((secs % 3600) / 60),
			Math.trunc((secs % 3600) % 60),
		]
	}
}

export { statsForAthleticAssoc }
