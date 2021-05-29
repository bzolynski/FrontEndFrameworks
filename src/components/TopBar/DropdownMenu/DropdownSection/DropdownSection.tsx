import { FC } from 'react';
import styled from 'styled-components';
import DropdownItem, { IDropdownItem } from './DropdownItem/DropdownItem';

const Wrapper = styled.div`
	width: 95%;
	display: flex;
	align-items: left;
	flex-direction: column;
	margin: 0 10px;
	h5 {
		margin: 10px 0;
		color: gray;
	}
`;

export interface IDropdownSection {
	title: string;
	items: IDropdownItem[];
	setSelectedItem?: Function;
}

const DropdownSection: FC<IDropdownSection> = ({ items, title, setSelectedItem }) => {
	return (
		<Wrapper key={title}>
			<h5>{title}</h5>
			{items.map((item, index) => (
				<DropdownItem
					setSelectedItem={setSelectedItem}
					key={item.name + index}
					icon={item.icon}
					name={item.name}
					route={item.route}
				/>
			))}
		</Wrapper>
	);
};

export default DropdownSection;
