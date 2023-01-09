function areYouPlayingBanjo(name: string): string {
	return name[0].toLowerCase() === 'r'
		? `${name} plays banjo`
		: `${name} does not play banjo`
}

export { areYouPlayingBanjo }
