function matchingAndSubstituting(s: string, prog: string, version: string) {
	const [programKV, authorKV, corpKV, phoneKV, dateKV, versionKV, levelKV] = s.split('\n')

	const [_, versionNum] = versionKV.split(': ')
	if (versionNum.split('.').length !== 2) return 'ERROR: VERSION or PHONE'
	const [versionMajor, versionMinor] = versionNum.split('.')
	if (versionMajor === undefined || versionMajor === '') return 'ERROR: VERSION or PHONE'
	if (versionMinor === undefined || versionMinor === '') return 'ERROR: VERSION or PHONE'

	const [__, phoneNum] = phoneKV.split(': ')
	const [countryCode, areaCode, telPrefix, lineNum] = phoneNum.split('-')
	if (!countryCode.includes('+') || !countryCode.includes('1'))
		return 'ERROR: VERSION or PHONE'
	if (areaCode.length !== 3) return 'ERROR: VERSION or PHONE'
	if (telPrefix.length !== 3) return 'ERROR: VERSION or PHONE'
	if (lineNum.length !== 4) return 'ERROR: VERSION or PHONE'

	return s
		.split('\n')
		.reduce((acc: string[], _, idx) => {
			switch (idx) {
				case 0: {
					acc.push(`Program: ${prog}`)
					break
				}
				case 1: {
					acc.push(`Author: g964`)
					break
				}
				case 2:
					break

				case 3: {
					acc.push(`Phone: +1-503-555-0090`)
					break
				}
				case 4: {
					acc.push(`Date: 2019-01-01`)
					break
				}
				case 5: {
					versionNum === '2.0'
						? acc.push(`Version: 2.0`)
						: acc.push(`Version: ${version}`)
					break
				}
				case 6:
					break

				default: {
					throw new Error('default block reached in switch statement')
				}
			}

			return acc
		}, [])
		.join(' ')
}

export { matchingAndSubstituting }
