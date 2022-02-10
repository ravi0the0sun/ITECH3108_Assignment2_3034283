export default {
	users: [
		{ username: 'alfred', name: 'Dr Alfredo' },
		{ username: 'barnie', name: 'Barnibarno' },
		{ username: 'cynthia', name: 'Cynthesis' },
	],
	topics: [
		{
			title: 'What do you want to do with your life?',
			user: 'alfred',
			id: 1,
			posts: [
				{
					text: 'Where do you see yourself in 5 years?',
					user: 'alfred',
				},
				{
					text: 'Not hanging around in this forum.',
					user: 'barnie',
				},
				{
					text: 'Come on @barnie, no need to be like that!',
					user: 'cynthia',
				},
			],
		},
		{
			title: 'Have you ever found money on the road?',
			user: 'cynthia',
			id: 2,
			posts: [
				{
					text: 'I was walking down the street and found $5 - I was so excited!',
					user: 'cynthia',
				},
				{
					text: 'It was probably mine. Give it back',
					user: 'barnie',
				},
				{
					text: 'Why are we even friends with you @barnie',
					user: 'alfred',
				},
				{
					text: 'Because of my optimistic outlook.',
					user: 'barnie',
				},
			],
		},
	],
};
