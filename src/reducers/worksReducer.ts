import IWork from '../interfaces/IWork';
import * as actionTypes from '../actions/actionTypes/workTypes';

export interface IWorkState {
	works: IWork[];
}

const defaultState = (): IWorkState => ({
	works: []
});

export default (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_WORKS: {
			const data: actionTypes.IWorkTypes['GET_WORKS'] = action;
			return {
				...state,
				works: data.works
			};
		}
		default:
			return { ...state };
	}
};
