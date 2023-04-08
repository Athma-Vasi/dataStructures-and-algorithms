function concatAll<T>([...arrays]: Array<T[]>): T[] {
	return arrays.reduce((finalArr, currArr) => {
		currArr.forEach((elem) => finalArr.push(elem))

		return finalArr
	}, [])
}

// console.log(
// 	concatAll([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// )

function something() {
	const movieLists = [
		{
			name: 'Instant Queue',
			videos: [
				{
					id: 70111470,
					title: 'Die Hard',
					boxarts: [
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					bookmark: [],
				},
				{
					id: 654356453,
					title: 'Bad Boys',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
						},
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					bookmark: [{ id: 432534, time: 65876586 }],
				},
			],
		},
		{
			name: 'New Releases',
			videos: [
				{
					id: 65432445,
					title: 'The Chamber',
					boxarts: [
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					bookmark: [],
				},
				{
					id: 675465,
					title: 'Fracture',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
						},
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
						},
						{
							width: 300,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					bookmark: [{ id: 432534, time: 65876586 }],
				},
			],
		},
	]

	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
	type FinalArr = {
		id: number
		title: string
		boxart: string
	}[]

	return movieLists.reduce((finalArr: FinalArr, { videos }) => {
		videos.forEach(({ id, title, boxarts }) => {
			boxarts.forEach(({ width, height, url }) => {
				width === 150 && height === 200
					? finalArr.push({ id, title, boxart: url })
					: finalArr
			})
		})

		return finalArr
	}, [])
}

// console.log(something())

// Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
// [
//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

function something2() {
	const movieLists = [
		{
			name: 'New Releases',
			videos: [
				{
					id: 70111470,
					title: 'Die Hard',
					boxarts: [
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					bookmark: [],
				},
				{
					id: 654356453,
					title: 'Bad Boys',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
						},
						{
							width: 140,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					bookmark: [{ id: 432534, time: 65876586 }],
				},
			],
		},
		{
			name: 'Thrillers',
			videos: [
				{
					id: 65432445,
					title: 'The Chamber',
					boxarts: [
						{
							width: 130,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					bookmark: [],
				},
				{
					id: 675465,
					title: 'Fracture',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
						},
						{
							width: 120,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
						},
						{
							width: 300,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					bookmark: [{ id: 432534, time: 65876586 }],
				},
			],
		},
	]

	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
	type FinalArr = {
		id: number
		title: string
		boxart: string
	}[]

	return movieLists.reduce((finalArr: FinalArr, { videos }) => {
		videos.forEach(({ id, title, boxarts }) => {
			const sortedWidthAndHeights = boxarts.sort((a, b) =>
				// a.width === b.width ? a.height - b.height : a.width - b.width
				a.width === b.width
					? a.height - b.height
					: a.height === b.height
					? a.width - b.width
					: a.width - b.width
			)

			finalArr.push({ id, title, boxart: sortedWidthAndHeights[0].url })
		})

		return finalArr
	}, [])
}

function something3() {
	const videos = [
		{
			id: 70111470,
			title: 'Die Hard',
			boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 4.0,
		},
		{
			id: 654356453,
			title: 'Bad Boys',
			boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 5.0,
		},
		{
			id: 65432445,
			title: 'The Chamber',
			boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 4.0,
		},
		{
			id: 675465,
			title: 'Fracture',
			boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
			uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
			rating: 5.0,
		},
	]

	const bookmarks = [
		{ id: 470, time: 23432 },
		{ id: 453, time: 234324 },
		{ id: 445, time: 987834 },
	]

	type FinalArr = {
		videoId: number
		bookmarkId: number
	}[]

	return videos.reduce((finalArr: FinalArr, { id }, videoIdx) => {
		if (videoIdx < bookmarks.length) {
			const zippedObj = {
				videoId: id,
				bookmarkId: bookmarks[videoIdx].id,
			}

			finalArr.push(zippedObj)
		}

		return finalArr
	}, [])
}

// console.log(something3())

function something4() {
	const movieLists = [
		{
			name: 'New Releases',
			videos: [
				{
					id: 70111470,
					title: 'Die Hard',
					boxarts: [
						{
							width: 150,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					interestingMoments: [
						{ type: 'End', time: 213432 },
						{ type: 'Start', time: 64534 },
						{ type: 'Middle', time: 323133 },
					],
				},
				{
					id: 654356453,
					title: 'Bad Boys',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
						},
						{
							width: 140,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					interestingMoments: [
						{ type: 'End', time: 54654754 },
						{ type: 'Start', time: 43524243 },
						{ type: 'Middle', time: 6575665 },
					],
				},
			],
		},
		{
			name: 'Instant Queue',
			videos: [
				{
					id: 65432445,
					title: 'The Chamber',
					boxarts: [
						{
							width: 130,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
						},
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 4.0,
					interestingMoments: [
						{ type: 'End', time: 132423 },
						{ type: 'Start', time: 54637425 },
						{ type: 'Middle', time: 3452343 },
					],
				},
				{
					id: 675465,
					title: 'Fracture',
					boxarts: [
						{
							width: 200,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
						},
						{
							width: 120,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
						},
						{
							width: 300,
							height: 200,
							url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
						},
					],
					url: 'http://api.netflix.com/catalog/titles/movies/70111470',
					rating: 5.0,
					interestingMoments: [
						{ type: 'End', time: 45632456 },
						{ type: 'Start', time: 234534 },
						{ type: 'Middle', time: 3453434 },
					],
				},
			],
		},
	]

	type FinalArr = {
		id: number
		title: string
		time: number
		url: string
	}[]

	//------------ COMPLETE THIS EXPRESSION --------------
	return movieLists.reduce((finalArr: FinalArr, { videos }) => {
		videos.forEach(({ id, title, boxarts, interestingMoments }) => {
			const sortedWidthAndHeights = boxarts.sort((a, b) =>
				a.width === b.width
					? a.height - b.height
					: a.height === b.height
					? a.width - b.width
					: a.width - b.width
			)

			const middleTime = interestingMoments.reduce(
				(middleTime_, { type, time }) =>
					type === 'Middle' ? (middleTime_ = time) : middleTime_,
				0
			)

			finalArr.push({ id, title, time: middleTime, url: sortedWidthAndHeights[0].url })
		})

		return finalArr
	}, [])
}

// console.log(something4())

function something5() {
	const lists = [
		{
			id: 5434364,
			name: 'New Releases',
		},
		{
			id: 65456475,
			name: 'Thrillers',
		},
	]

	const videos = [
		{
			listId: 5434364,
			id: 65432445,
			title: 'The Chamber',
		},
		{
			listId: 5434364,
			id: 675465,
			title: 'Fracture',
		},
		{
			listId: 65456475,
			id: 70111470,
			title: 'Die Hard',
		},
		{
			listId: 65456475,
			id: 654356453,
			title: 'Bad Boys',
		},
	]

	type FinalArr = {
		name: string
		videos: { id: number; title: string }[]
	}[]

	return lists.map(({ id, name }) => {
		return {
			name: name,
			videos: videos
				.filter(({ listId }) => listId === id)
				.map(({ id, title }) => {
					return { id, title }
				}),
		}
	})
}

// console.log(something5())

function something6() {
	const lists = [
		{
			id: 5434364,
			name: 'New Releases',
		},
		{
			id: 65456475,
			name: 'Thrillers',
		},
	]

	const videos = [
		{
			listId: 5434364,
			id: 65432445,
			title: 'The Chamber',
		},
		{
			listId: 5434364,
			id: 675465,
			title: 'Fracture',
		},
		{
			listId: 65456475,
			id: 70111470,
			title: 'Die Hard',
		},
		{
			listId: 65456475,
			id: 654356453,
			title: 'Bad Boys',
		},
	]

	const boxarts = [
		{
			videoId: 65432445,
			width: 130,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
		},
		{
			videoId: 65432445,
			width: 200,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
		},
		{
			videoId: 675465,
			width: 200,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
		},
		{
			videoId: 675465,
			width: 120,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
		},
		{
			videoId: 675465,
			width: 300,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
		},
		{
			videoId: 70111470,
			width: 150,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
		},
		{
			videoId: 70111470,
			width: 200,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
		},
		{
			videoId: 654356453,
			width: 200,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
		},
		{
			videoId: 654356453,
			width: 140,
			height: 200,
			url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
		},
	]

	const bookmarks = [
		{ videoId: 65432445, time: 32432 },
		{ videoId: 675465, time: 3534543 },
		{ videoId: 70111470, time: 645243 },
		{ videoId: 654356453, time: 984934 },
	]

	return lists.map(({ id, name }) => {
		return {
			name,
			videos: videos
				.filter(({ listId }) => id === listId)
				.map(({ id: videosId, title }) => {
					return {
						id: videosId,
						title,
						time: bookmarks.reduce(
							(acc, { videoId, time }) => (videosId === videoId ? (acc = time) : acc),
							0
						),
						boxart: boxarts
							.filter(({ videoId }) => videosId === videoId)
							.sort((a, b) =>
								a.width === b.width
									? a.height - b.height
									: a.height === b.height
									? a.width - b.width
									: a.width - b.width
							)[0].url,
					}
				}),
		}
	})
}

// console.log(something6())
