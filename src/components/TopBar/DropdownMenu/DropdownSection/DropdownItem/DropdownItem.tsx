import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeSelectedItem } from '../../../../../store/actions/dropdownActions';
import StyledLink from '../../../../common/StyledLink';

type SelectItem = ReturnType<typeof changeSelectedItem>;

const Wrapper = styled.div<{closeDropdown:Function | undefined}>`
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 5px;
		padding-bottom: 8px;
		margin-bottom: 2px;
		color: #03183b;
		font-size: 13px;
		font-weight: 600;
		cursor: ${p => p.closeDropdown === undefined ? 'default' : 'pointer'};
		border-radius: 3px;
		text-decoration: none;
		:hover {
			background: ${p => p.closeDropdown === undefined ? 'none' : 'lightgray'};
		}
		svg {
			height: 1.4rem;
			margin-right: 10px;
		}
	`;

export interface IDropdownItem {
	icon: ReactElement;
	name: string;
	route: string;
	closeDropdown?: Function;
}

const DropdownItem: FC<IDropdownItem> = ({ icon, name, route, closeDropdown }) => {
	const dispatch = useDispatch();

	const currentItem: IDropdownItem = {
		icon: icon,
		name: name,
		route: route
	};

	

	return (
		<StyledLink to={route}>
			<Wrapper closeDropdown={closeDropdown}
				onClick={() => {
					if (closeDropdown !== undefined) {
						closeDropdown();
						dispatch<SelectItem>(changeSelectedItem(currentItem));
					}
				}}
			>
				{icon}
				{name}
			</Wrapper>
		</StyledLink>
	);
};

export default DropdownItem;
