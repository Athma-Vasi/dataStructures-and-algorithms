//fails tests with unknown args

function simpleMusicDecoder(music: string) {
	return music.split(',').reduce((acc: number[], curr) => {
		if (curr.includes('*')) {
			const [num_, count_] = curr.split('*')
			const num = Number(num_)
			const count = Number(count_)

			for (let i = 0; i < count; i += 1) acc.push(num)
		} else if (curr.includes('-') && !curr.includes('/')) {
			const [first_, last_] = curr.split('-')
			const first = Number(first_)
			const last = Number(last_)

			if (first < last) for (let i = first; i <= last; i += 1) acc.push(i)
			else for (let i = first; i >= last; i -= 1) acc.push(i)
		} else if (curr.includes('/') && curr.includes('-')) {
			const [firstLast_, interval_] = curr.split('/')
			const interval = Number(interval_)
			const [first_, last_] = firstLast_.split('-')
			const first = Number(first_)
			const last = Number(last_)

			if (first < last) for (let i = first; i <= last; i += interval) acc.push(i)
			else for (let i = first; i >= last; i -= interval) acc.push(i)
		} else acc.push(Number(curr))

		return acc
	}, [])
}

export { simpleMusicDecoder }
