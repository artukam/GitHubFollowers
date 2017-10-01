export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';
export const SET_FOLLOWERS = 'SET_FOLLOWERS';
export const ADD_FOLLOWERS = 'ADD_FOLLOWERS';

export function setUser(userData) {
	return {
		type: SET_USER,
		user: userData
	}
}

export function resetUser() {
	return {
		type: RESET_USER
	}
}

export function setFollowers(followers) {
	return {
		type: SET_FOLLOWERS,
		followers: followers
	}
}

export function addFollowers(newFollowers) {
	return {
		type: ADD_FOLLOWERS,
		newFollowers: newFollowers
	}
}
