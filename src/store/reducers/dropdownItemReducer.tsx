import * as actionTypes from '../actionTypes/dropdownTypes';
import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';
import { ReactComponent as HomeLogo } from '../../assets/house2.svg';

export interface IDropdownState {
	selectedItem: IDropdownItem;
	selectedWorkspace: string;
}

const defaultState = (): IDropdownState => ({
	selectedItem: {
		icon: <HomeLogo />,
		name: 'Home',
		route: '/'
	},
	selectedWorkspace: ''
});

const dropdownReducer = (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.CHANGE_DROPDOWN: {
			const data: actionTypes.IDropdownTypes['CHANGE_DROPDOWN'] = action;
			return {
				...state,
				selectedItem: data.selectedItem
			};
		}
		case actionTypes.CHANGE_WORKSPACE: {
			const data: actionTypes.IDropdownTypes['CHANGE_WORKSPACE'] = action;
			return {
				...state,
				selectedWorkspace: data.selectedWorkspace
			};
		}
		default:
			return { ...state };
	}
};

export default dropdownReducer;
