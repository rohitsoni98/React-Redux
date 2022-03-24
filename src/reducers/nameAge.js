const initialState = {
	name: "Rahul",
	age: 19,
	input: ""
}

const changeTheName = (state = initialState, action) => {
	switch (action.type) {
		case "UpdateName":
			return {
				...state,
				name: action.payload
			};

		case "UpdateAge":
			return {
				...state,
				age: action.payload
			}
		case "UpdateColor":
			return {
				...state,
				input: action.payload
			}
		default:
			return state

	}

}

export default changeTheName;


