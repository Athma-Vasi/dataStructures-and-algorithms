function nextVersion(version: string) {
	let remainder = 0

	return version.length === 1
		? `${Number(version) + 1}`
		: version
				.split('.')
				.reduceRight((acc: string[], curr, idx) => {
					if (idx === version.split('.').length - 1) {
						if (Number(curr) === 9) {
							acc.unshift('0')
							remainder = 1
						} else acc.unshift(`${Number(curr) + 1}`)
					} else if (remainder !== 0) {
						if (idx !== 0) {
							if (Number(curr) === 9) {
								acc.unshift('0')
								remainder = 1
							} else {
								acc.unshift(`${Number(curr) + 1}`)
								remainder = 0
							}
						} else {
							acc.unshift(`${Number(curr) + 1}`)
						}
					} else acc.unshift(`${Number(curr)}`)

					return acc
				}, [])
				.join('.')
}

export { nextVersion }
