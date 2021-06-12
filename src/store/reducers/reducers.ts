import { combineReducers } from 'redux';
import publicationReducer, { IPublicationState } from './publicationReducers';
import worksReducer, { IWorkState } from './worksReducer';
import dropdownReducer, { IDropdownState } from './dropdownItemReducer';
import entityReducer, { IEntityState } from './entityReducers';
import userReducer, { IUserState } from './userReducers';
import profileReducer, { IProfileState } from './profileReducers';

export default combineReducers({
	publicationReducer,
	worksReducer,
	dropdownReducer,
	entityReducer,
	userReducer,
	profileReducer
});

export interface IStore {
	publicationReducer: IPublicationState;
	worksReducer: IWorkState;
	dropdownReducer: IDropdownState;
	entityReducer: IEntityState;
	userReducer: IUserState;
	profileReducer: IProfileState;
}
