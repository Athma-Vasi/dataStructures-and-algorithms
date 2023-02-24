function _bouncingBall(h: number, bounce: number, window: number, count = 0): number {
	if (h <= 0) return -1
	if (bounce <= 0 || bounce >= 1) return -1

	return h < window /**base condition */
		? count - 1
		: window > h
		? -1
		: _bouncingBall(h * bounce, bounce, window, (count += 2))
}

function bouncingBall1(h: number, bounce: number, window: number) {
	if (h < 0) return -1
	if (bounce <= 0 || bounce >= 1) return -1
	if (window > h) return -1

	let count = 0
	let height = h

	while (height > window) {
		height *= bounce
		count += 2
	}

	return count - 1
}

export { bouncingBall1 }
