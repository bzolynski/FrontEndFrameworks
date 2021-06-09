import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/dropdownTypes';
import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';

export const changeSelectedItem = (selectedItem: IDropdownItem): IDropdownItem =>
	((dispatch: Dispatch) => {
		console.log(selectedItem);
		
		dispatch({
			type: actionTypes.CHANGE_DROPDOWN,
			selectedItem
		});
	}) as any;
