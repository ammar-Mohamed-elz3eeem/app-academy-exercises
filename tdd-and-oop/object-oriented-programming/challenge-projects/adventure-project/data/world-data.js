module.exports = {
	rooms: [
		{
			id: 1,
			name: "Crossroad",
			description:
				"You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
			exits: { n: 2, e: 3, w: 4, s: 5 },
		},
		{
			id: 2,
			name: "Northern point",
			description:
				"You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
			exits: { s: 1 },
		},
		{
			id: 3,
			name: "Eastern point",
			description:
				"You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
			exits: { w: 1 },
		},
		{
			id: 4,
			name: "Western point",
			description:
				"You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
			exits: { e: 1 },
		},
		{
			id: 5,
			name: "Southern point",
			description:
				"You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
			exits: { n: 1 },
		},
	],
	items: [
		{
			name: "rock",
			description: "Just a simple rock",
			room: 1,
		},
		{
			name: "scissors",
			description: "Just a simple scissors",
			room: 1,
		},
		{
			name: "sandwich",
			description: "A tasty looking sandwich",
			room: 2,
			isFood: true,
		},
		{
			name: "pasta",
			description: "A dish of red sauce pasta",
			room: 3,
			isFood: true,
		},
		{
			name: "lunch box",
			description: "This is a simple lunch box",
			room: 4,
		},
		{
			name: "toast",
			description: "This is a piece of toast",
            room: 1,
            isFood: true,
		},
	],
};
