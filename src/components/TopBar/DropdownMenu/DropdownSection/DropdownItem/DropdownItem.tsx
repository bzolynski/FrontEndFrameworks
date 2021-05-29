import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import StyledLink from '../../../../common/StyledLink';

export interface IDropdownItem {
	icon: ReactElement;
	name: string;
	route: string;
	setSelectedItem?: Function;
}

const DropdownItem: FC<IDropdownItem> = ({ icon, name, route, setSelectedItem }) => {
	const currentItem: IDropdownItem = {
		icon: icon,
		name: name,
		route: route
	};

	const Wrapper = styled.div`
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 5px;
		padding-bottom: 8px;
		margin-bottom: 2px;
		color: #03183b;
		font-size: 13px;
		font-weight: 600;
		cursor: ${setSelectedItem === undefined ? 'default' : 'pointer'};
		border-radius: 3px;
		text-decoration: none;
		:hover {
			background: ${setSelectedItem === undefined ? 'none' : 'lightgray'};
		}
		svg {
			height: 1.4rem;
			margin-right: 10px;
		}
	`;

	return (
		<StyledLink to={route}>
			<Wrapper
				onClick={() => {
					if (setSelectedItem !== undefined) {
						setSelectedItem(currentItem);
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
