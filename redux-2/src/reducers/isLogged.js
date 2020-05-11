const loggedReducer = (state = false, action) => {
	console.log(state);
	switch(action.type){
		case "SIGN_IN":
		return !state;
		default:
		return false;
	}

}

export default loggedReducer;