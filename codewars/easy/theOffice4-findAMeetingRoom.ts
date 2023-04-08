function findAMeetingRoom(rooms: string[]) {
	const boolArr = rooms.reduce((acc: boolean[], curr) => {
		curr === 'X' ? acc.push(false) : acc.push(true)

		return acc
	}, [])

	const emptyRoomIdx = boolArr.findIndex((bool) => bool === true)

	return emptyRoomIdx === -1 ? 'None available!' : emptyRoomIdx
}

export { findAMeetingRoom }
