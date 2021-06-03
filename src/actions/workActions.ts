import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/workTypes';
import IWork from '../interfaces/IWork';
import RestService from '../services/RestService';

export const getWorks = (): Promise<IWork[]> =>
	((dispatch: Dispatch) => {
		const service = new RestService();
		service.getWorks().then((works) => {
			dispatch({
				type: actionTypes.GET_WORKS,
				works
			});
		});
	}) as any;
