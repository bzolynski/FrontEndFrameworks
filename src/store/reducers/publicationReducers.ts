import IPublication from '../../interfaces/IPublication';
import * as actionTypes from '../actionTypes/publicationTypes';

export interface IPublicationState {
	publications: IPublication[];
}

const defaultState = (): IPublicationState => ({
	publications: []
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_PUBLICATIONS: {
			const data: actionTypes.IPublicationTypes['GET_PUBLICATIONS'] = action;
			return {
				...state,
				publications: data.publications
			};
		}
		default:
			return { ...state };
	}
};
