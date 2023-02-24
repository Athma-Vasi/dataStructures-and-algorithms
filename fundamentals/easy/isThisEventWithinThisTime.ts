//fails random tests with unknown args (also i think tests are wrong)

function withinTime(start: number, end: number, events: [number, number][]) {
	return events.reduce((acc: [number, number][], nums: [number, number]) => {
		let isEventWithinTime = false
		nums.forEach((num) => {
			num >= start && num <= end ? (isEventWithinTime = true) : isEventWithinTime
		})
		isEventWithinTime ? acc.push(nums) : acc

		return acc
	}, [])
}

export { withinTime }
