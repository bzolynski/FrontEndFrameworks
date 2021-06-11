import * as actionTypes from '../actionTypes/dropdownTypes';
import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';
import { ReactComponent as HomeLogo } from '../../assets/house2.svg';

export interface IDropdownState {
	selectedItem: IDropdownItem;
}

const defaultState = (): IDropdownState => ({
	selectedItem: {
		icon: <HomeLogo />,
		name: 'Home',
		route: '/'
	}
});

const dropdownReducer = (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.CHANGE_DROPDOWN: {
			const data: actionTypes.IDropdownTypes['CHANGE_DROPDOWN'] = action;
			console.log(data.selectedItem);

			return {
				...state,
				selectedItem: data.selectedItem
			};
		}
		default:
			return { ...state };
	}
};

export default dropdownReducer;
