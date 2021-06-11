import ICompany from '../../interfaces/ICompany';
import * as actionTypes from '../actionTypes/entityType';

export interface IEntityState {
	entities: ICompany[];
}

const defaultState = (): IEntityState => ({
	entities: []
});

const entityReducer = (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.GET_ENTITIES: {
			const data: actionTypes.IEntityType['GET_ENTITIES'] = action;
			return {
				...state,
				entities: data.entities
			};
		}
		default:
			return { ...state };
	}
};

export default entityReducer;
