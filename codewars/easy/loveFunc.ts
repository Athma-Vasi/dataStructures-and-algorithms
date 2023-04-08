function loveFunc(flower1: number, flower2: number) {
	return flower1 % 2 === 0 && flower2 % 2 !== 0
		? true
		: flower1 % 2 !== 0 && flower2 % 2 === 0
		? true
		: false
}

export { loveFunc }
