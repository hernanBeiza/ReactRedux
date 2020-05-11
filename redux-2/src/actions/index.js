export const increment = (numero) =>{
	return {
		type:'INCREMENT',
		payload: numero
	}
}
export const decrement = () =>{
	return {
		type:'DECREMENT'
	}
}
export const signIn = () =>{
	return {
		type:'SIGN_IN'
	}
}
export const signOut = () =>{
	return {
		type:'SIGN_OUT'
	}
}
