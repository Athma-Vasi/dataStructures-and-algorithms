class Ball {
	ballType_: string

	constructor(ballType_ = 'regular') {
		this.ballType_ = ballType_
	}

	get ballType() {
		return this.ballType_
	}
}

export { Ball }
