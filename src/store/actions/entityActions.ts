import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/entityType';
import ICompany from '../../interfaces/ICompany';
import RestService from '../../services/RestService';

export const getEntities = (): Promise<ICompany[]> =>
	((dispatch: Dispatch) => {
		const service = new RestService();
		service.getCompanies().then((entities) => {
			dispatch({
				type: actionTypes.GET_ENTITIES,
				entities
			});
		});
	}) as any;
