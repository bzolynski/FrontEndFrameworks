import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/publicationTypes';
import IPublication from '../../interfaces/IPublication';
import RestService from '../../services/RestService';

export const getPublications = (limit?: number): Promise<IPublication[]> =>
	((dispatch: Dispatch) => {
		const service = new RestService();
		service.getPublications(limit).then((publications) => {
			dispatch({
				type: actionTypes.GET_PUBLICATIONS,
				publications
			});
		});
	}) as any;
