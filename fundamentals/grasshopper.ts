function combat(health: number, damage: number) {
	return health - damage < 0 ? 0 : health - damage
}

export { combat }
