function enoughBusSpace(cap: number, on: number, wait: number) {
	return cap - on >= wait ? 0 : on - wait
}

export { enoughBusSpace }
