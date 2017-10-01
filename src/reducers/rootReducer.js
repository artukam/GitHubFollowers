import {
	SET_USER,
	SET_FOLLOWERS,
	RESET_USER,
	ADD_FOLLOWERS
} from '../actions/action';

const DEFAULT_STATE = {
	searchState: false,
	user: {},
	followersTotal: 0,
	followers: [],
	page: 0
}

export default (state=DEFAULT_STATE, action={type:null}) => {
	switch(action.type){
		case SET_USER:
			return {
				...state,
				searchState: true,
				user: action.user,
				followersTotal: action.user.followers,
				page: 2
			}
		case SET_FOLLOWERS:
			return {
				...state,
				followers: action.followers
			}
		case RESET_USER:
			return { ...DEFAULT_STATE }
		case ADD_FOLLOWERS:
			let newFollowers = [...state.followers, ...action.newFollowers];
			let newPage = state.page + 1
			return {
				...state,
				followers: newFollowers,
				page: newPage
			}
		case 'persist/REHYDRATE':
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
