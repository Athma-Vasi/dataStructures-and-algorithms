function landPerimeter(arr: string[]) {
	const numOfLayers = arr.length
	const numOfPlots = arr[0].length

	// y-axis
	return arr.reduce((landPlotsIdxs: [number, number][], horizLayer, horizLayerIdx) => {
		// x-axis
		horizLayer
			.split('')
			.forEach((plot, plotIdx) =>
				plot === 'X' ? landPlotsIdxs.push([horizLayerIdx, plotIdx]) : landPlotsIdxs
			)

		return landPlotsIdxs // [[y, x],...]
	}, [])
}

console.log(landPerimeter(['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO']))
