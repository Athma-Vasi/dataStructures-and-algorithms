// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function drawHeart(n) {
	const charSet = new Map([
		['square', '■'],
		['empty', ' '],
		['topRight', '◥'],
		['topLeft', '◤'],
		['bottomLeft', '◣'],
		['bottomRight', '◢'],
	])

	const widthToHeightMap = new Map()
	// creates a Map of width keys and height values up to n
	{
		let width = 6
		let height = 5
		while (width <= n) {
			widthToHeightMap.set(width, height)
			width += 2
			// relationship between width and height
			height = width % 6 === 0 ? (height += 2) : (height += 1)
		}
	}

	const halfWidth = n / 2
	const height1 = widthToHeightMap.get(n) ?? Infinity

	const heartArr = []
	let h = height1
	let layer = 0
	let filledSpots = 1
	// number of whole square layers near the top
	const layersOfSquares = Math.floor(n / 6)

	while (h > 0) {
		let halfLayer = []

		// starting from the bottom and working up
		// bottom most layer
		if (layer === 0) {
			// left side
			halfLayer.unshift(charSet.get('topRight') ?? '')
			halfLayer.unshift(charSet.get('empty')?.repeat(halfWidth - filledSpots) ?? '')

			// right side
			halfLayer.push(charSet.get('topLeft') ?? '')
			halfLayer.push(charSet.get('empty')?.repeat(halfWidth - filledSpots) ?? '')

			heartArr.unshift(halfLayer.join(''))

			layer += 1
			filledSpots += 1
			h -= 1
		}
		// this check prevents negative number inside repeat()
		// these layers are where the filled spots are increasing (starting from 2ndmost bottom layer)
		else if (layer <= halfWidth && halfWidth - filledSpots >= 0) {
			// left side
			halfLayer.unshift(charSet.get('square')?.repeat(layer) ?? '')
			halfLayer.unshift(charSet.get('topRight') ?? '')
			halfLayer.unshift(charSet.get('empty')?.repeat(halfWidth - filledSpots) ?? '')

			// right side
			halfLayer.push(charSet.get('square')?.repeat(layer) ?? '')
			halfLayer.push(charSet.get('topLeft') ?? '')
			halfLayer.push(charSet.get('empty')?.repeat(halfWidth - filledSpots) ?? '')

			heartArr.unshift(halfLayer.join(''))

			layer += 1
			filledSpots += 1
			h -= 1
		} else {
			// layers of whole squares
			for (let i = 0; i < layersOfSquares; i += 1) {
				halfLayer.unshift(charSet.get('square')?.repeat(halfWidth * 2) ?? '')
				heartArr.unshift(halfLayer.join(''))

				halfLayer = []

				layer += 1
				h -= 1
			}
			halfLayer = []

			//top most left layer
			halfLayer.unshift(charSet.get('bottomLeft') ?? '')
			halfLayer.unshift(charSet.get('square')?.repeat(halfWidth - 2) ?? '')
			halfLayer.unshift(charSet.get('bottomRight') ?? '')

			//top most right layer
			halfLayer.push(charSet.get('bottomRight') ?? '')
			halfLayer.push(charSet.get('square')?.repeat(halfWidth - 2) ?? '')
			halfLayer.push(charSet.get('bottomLeft') ?? '')

			heartArr.unshift(halfLayer.join(''))

			layer += 1
			h -= 1
		}
	}

	return heartArr.join('\n')
}
