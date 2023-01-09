function isValidWalk(walk: string[]) {
	if (walk.length % 2 !== 0) return false
	if (walk.length > 10) return false
	if (walk.length < 10) return false
	if (walk.length === 1) return false

	const dirMap = new Map([
		['n', 's'],
		['s', 'n'],
		['e', 'w'],
		['w', 'e'],
	])

	const walkTo = walk.slice(0, walk.length / 2)
	const walkBack = walk.slice(walk.length / 2)

	const traceSteps = walkBack.reduce((acc, curr, idx) => {
		dirMap.get(curr) === walkTo[idx] ? (acc = true) : (acc = false)

		return acc
	}, false)

	if (traceSteps === false) return false

	const walkToMap: Map<string, number> = new Map()
	const walkBackMap: Map<string, number> = new Map()

	walkTo.forEach((value, _) => {
		let result = walkToMap.get(value) ?? 0
		walkToMap.set(value, (result += 1))
	})

	walkBack.forEach((value, _) => {
		let result = walkBackMap.get(value) ?? 0
		walkBackMap.set(value, (result += 1))
	})

	let circuitousRouteFlag: boolean

	if (walkToMap.get('n') === walkBackMap.get('s')) circuitousRouteFlag = true
	else {
		circuitousRouteFlag = false
		return false
	}
	if (walkToMap.get('s') === walkBackMap.get('n')) circuitousRouteFlag = true
	else {
		circuitousRouteFlag = false
		return false
	}
	if (walkToMap.get('e') === walkBackMap.get('w')) circuitousRouteFlag = true
	else {
		circuitousRouteFlag = false
		return false
	}
	if (walkToMap.get('w') === walkBackMap.get('e')) circuitousRouteFlag = true
	else {
		circuitousRouteFlag = false
		return false
	}

	return traceSteps && circuitousRouteFlag
}

//failed two tests that did not elaborate on failed conditions...
export { isValidWalk }
