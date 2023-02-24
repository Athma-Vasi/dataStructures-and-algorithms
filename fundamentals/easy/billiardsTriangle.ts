function billiardsTriangle(balls: number) {
	if (balls === 1) return 1

	let levels = 1
	let ballsReq = 1

	while (ballsReq < balls) {
		ballsReq = ballsReq + ballsReq * levels
		levels += 1
	}

	return levels - 1
}

console.log(billiardsTriangle(100))
