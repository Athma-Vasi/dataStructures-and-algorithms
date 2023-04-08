function feastOfManyBeasts(beast: string, dish: string) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

export { feastOfManyBeasts }
