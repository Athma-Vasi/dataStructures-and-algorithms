function removeAnchorFromUrl(url: string) {
	let isInsideAnchor = false

	return url.split('').reduce((acc, curr) => {
		curr === '#' ? (isInsideAnchor = true) : isInsideAnchor
		isInsideAnchor ? acc : (acc += curr)

		return acc
	}, '')
}

export { removeAnchorFromUrl }
