import IUser from '../../interfaces/IUser';

export const GET_USERS = 'GET_USERS';
export const GET_ACTIVE_USER = 'GET_ACTIVE_USER';
export const UPDATE_ACTIVE_USER = 'UPDATE_ACTIVE_USER';

export interface IUserTypes {
	GET_USERS: {
		users: IUser[];
	};
	GET_ACTIVE_USER: {
		activeUser: IUser;
	};
	UPDATE_ACTIVE_USER: {
		activeUser: IUser;
	};
}
