import { Dispatch } from 'redux';
import IUser from '../../interfaces/IUser';
import RestService from '../../services/RestService';
import * as actionTypes from '../actionTypes/userTypes';
export const getUsers = (): IUser[] =>
	((dispatch: Dispatch) => {
		const service = new RestService();
		service.getUsers().then((users) => {
			dispatch({
				type: actionTypes.GET_USERS,
				users: users
			});
		});
	}) as any;

export const getActiveUser = (id: number): IUser =>
	((dispatch: Dispatch) => {
		const service = new RestService();
		service.getUser(id).then((user) => {
			dispatch({
				type: actionTypes.GET_ACTIVE_USER,
				activeUser: user
			});
		});
	}) as any;

export const updateActiveUser = (user: IUser): IUser =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_ACTIVE_USER,
			activeUser: user
		});
	}) as any;
