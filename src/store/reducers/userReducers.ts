import IUser from '../../interfaces/IUser';
import * as actionTypes from '../actionTypes/userTypes';

export interface IUserState {
	users: IUser[];
	activeUser: IUser | null;
}

const defaultState = (): IUserState => ({
	users: [],
	activeUser: null
});

const userReducer = (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_USERS: {
			const data: actionTypes.IUserTypes['GET_USERS'] = action;
			return {
				...state,
				users: data.users
			};
		}
		case actionTypes.GET_ACTIVE_USER: {
			const data: actionTypes.IUserTypes['GET_ACTIVE_USER'] = action;
			return {
				...state,
				activeUser: data.activeUser
			};
		}
		case actionTypes.UPDATE_ACTIVE_USER: {
			const data: actionTypes.IUserTypes['UPDATE_ACTIVE_USER'] = action;
			return {
				...state,
				activeUser: data.activeUser
			};
		}

		default:
			return { ...state };
	}
};

export default userReducer;
