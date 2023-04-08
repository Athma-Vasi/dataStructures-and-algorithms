function setAlarm(employed: boolean, vacation: boolean) {
	return employed && vacation
		? false
		: !employed && vacation
		? false
		: !employed && !vacation
		? false
		: true
}

export { setAlarm }
