import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';

export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';
export const CHANGE_WORKSPACE = 'CHANGE_WORKSPACE';

export interface IDropdownTypes {
	CHANGE_DROPDOWN: {
		selectedItem: IDropdownItem;
	};
	CHANGE_WORKSPACE: {
		selectedWorkspace: string;
	}
}
