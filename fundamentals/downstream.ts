function rowingTime(dist: number, vel: number, stream: string): number {
	const [dir, streamVel] = stream.split(' ')

	return dir === 'Upstream'
		? Number((dist / (vel - Number(streamVel))).toFixed(2))
		: Number((dist / (vel + Number(streamVel))).toFixed(2))
}

export { rowingTime }
