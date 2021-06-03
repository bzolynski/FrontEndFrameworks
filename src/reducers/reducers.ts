import { combineReducers } from 'redux';
import publicationReducer, { IPublicationState } from './publicationReducers';
import worksReducer, { IWorkState } from './worksReducer';

export default combineReducers({
	publicationReducer,
	worksReducer
});

export interface IStore {
	publicationReducer: IPublicationState;
	worksReducer: IWorkState;
}
