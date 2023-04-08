function getW(height: number) {
	//yeah but you should see my other attempts...

	if (height === 1) return []
	const maxSpace = height + (height - 1) * 3

	let leftSpace = 1
	let leftMidSpace = (maxSpace - 3) / 2
	let midSpace = 1
	let rightMidSpace = (maxSpace - 3) / 2
	let rightSpace = 1

	let leftStarIdx = 0
	const midStarIdx = Math.floor(maxSpace / 2)
	let leftMidStarIdx = midStarIdx - 1
	let rightMidStarIdx = midStarIdx + 1
	let rightStarIdx = maxSpace - 1

	let count = height
	const resultArr: string[] = []

	while (count > 0) {
		let tempArr: string[] = new Array(maxSpace)

		if (count === height) {
			tempArr[leftStarIdx] = '*'
			for (let i = 1; i <= leftMidSpace; i += 1) tempArr[i] = ' '
			tempArr[midStarIdx] = '*'
			for (let i = midStarIdx + 1; i < maxSpace; i += 1) tempArr[i] = ' '
			tempArr[rightStarIdx] = '*'

			resultArr.push(tempArr.join(''))
			tempArr = new Array(maxSpace)

			leftStarIdx += 1
			rightStarIdx -= 1
			count -= 1
		} else if (count < height && count > 1) {
			for (let i = 0; i < leftSpace; i += 1) tempArr[i] = ' '
			tempArr[leftStarIdx] = '*'
			for (let i = leftStarIdx + 1; i < leftMidStarIdx; i += 1) tempArr[i] = ' '
			tempArr[leftMidStarIdx] = '*'
			for (let i = leftMidStarIdx + 1; i < rightMidStarIdx; i += 1) tempArr[i] = ' '
			tempArr[rightMidStarIdx] = '*'
			for (let i = rightMidStarIdx + 1; i < rightStarIdx; i += 1) tempArr[i] = ' '
			tempArr[rightStarIdx] = '*'
			for (let i = rightStarIdx + 1; i < maxSpace; i += 1) tempArr[i] = ' '

			resultArr.push(tempArr.join(''))
			tempArr = new Array(maxSpace)

			leftSpace += 1
			leftStarIdx += 1
			leftMidSpace -= 1
			leftMidStarIdx -= 1
			midSpace += 1
			rightMidStarIdx += 1
			rightMidSpace -= 1
			rightStarIdx -= 1
			rightSpace += 1
			count -= 1
		} else if (count === 1) {
			for (let i = 0; i < height - 1; i += 1) tempArr[i] = ' '
			tempArr[height - 1] = '*'
			for (let i = height; i < maxSpace - height; i += 1) tempArr[i] = ' '
			tempArr[maxSpace - height] = '*'
			for (let i = maxSpace - height + 1; i < maxSpace; i += 1) tempArr[i] = ' '

			resultArr.push(tempArr.join(''))
			count -= 1
		}
	}

	return resultArr
}

console.log(getW(9))
