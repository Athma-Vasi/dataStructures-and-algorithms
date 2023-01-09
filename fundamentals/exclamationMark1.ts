function removeExclamationMarkFromEndOfString(s: string) {
	return s.split('')[s.length - 1] === '!' ? s.split('').slice(0, -1).join('') : s
}

export { removeExclamationMarkFromEndOfString }
