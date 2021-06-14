import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/dropdownTypes';
import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';

export const changeSelectedItem = (selectedItem: IDropdownItem): IDropdownItem =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.CHANGE_DROPDOWN,
			selectedItem
		});
	}) as any;

export const setSelectedWorkspace = (selectedWorkspace: string): string =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.CHANGE_WORKSPACE,
			selectedWorkspace
		});
	}) as any;
