function greetMessage(name: string, owner: string) {
	return name === owner ? `Hello boss` : `Hello guest`
}

export { greetMessage }
