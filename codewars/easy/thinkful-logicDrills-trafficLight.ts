function updateLight(current: string) {
	return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

export { updateLight }
