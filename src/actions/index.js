export const NameUpdate = () => {
	return {
		type: 'UpdateName',
		payload: "Rohit Kumar Soni"
	}
}

export const AgeUpdate = () => {
	return {
		type: "UpdateAge",
		payload: 22
	}
}

export const ColorUpdate = (color) => {
	return {
		type: "UpdateColor",
		payload: color
	}
}


