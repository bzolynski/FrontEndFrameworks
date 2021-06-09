import { IDropdownItem } from '../../components/TopBar/DropdownMenu/DropdownSection/DropdownItem/DropdownItem';

export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';

export interface IDropdownTypes {
	CHANGE_DROPDOWN: {
		selectedItem: IDropdownItem;
	};
}
