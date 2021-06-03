import { FC, useState } from 'react';

import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { ReactComponent as DownArrowSvg } from '../../../assets/arrow-down.svg';
import { ReactComponent as HomeLogo } from '../../../assets/house2.svg';
import { ReactComponent as PublicationsLogo } from '../../../assets/publications.svg';
import { ReactComponent as PeopleLogo } from '../../../assets/people.svg';
import { ReactComponent as EntitiesLogo } from '../../../assets/entities2.svg';
import { ReactComponent as AdministraionLogo } from '../../../assets/administration.svg';
import DropdownFilter from './DropdownFilter/DropdownFilter';
import DropdownSection, { IDropdownSection } from './DropdownSection/DropdownSection';
import DropdownItem, { IDropdownItem } from './DropdownSection/DropdownItem/DropdownItem';
const DropDownWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	height: 1.5rem;
	justify-content: center;
	position: relative;
	height: 30px;
`;

const DropDownToggler = styled.div`
	width: 1rem;
	display: flex;
	justify-content: right;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0;
	cursor: pointer;
	svg {
		max-height: 6px;
		margin: 0;
		margin-right: 10px;
	}
`;

const SelectedDropdownItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
	height: 100%;
	margin-left: 10px;
	div {
		margin: 0;
	}
`;

const DropDownContent = styled.div`
	background-color: white;
	position: absolute;
	top: 30px;

	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 0.3px solid lightgray;
	border-top: none;
	border-radius: 0 0 3px 3px;
`;

const homeMenu: IDropdownItem = {
	icon: <HomeLogo />,
	name: 'Home',
	route: '/'
};

const DropdownMenu: FC = () => {
	const [ filterValue, setFilterValue ] = useState<string>('');
	const [ selectedItem, setSelectedItem ] = useState<IDropdownItem>(homeMenu);
	const [ wrapperRef, dropdownOpen, toggleDropdown, closeDropdown ] = useDropdown();
	const selectItemAndCloseDropdown = (dropdownItem: IDropdownItem) => {
		setFilterValue('');
		closeDropdown();
		setSelectedItem(dropdownItem);
	};
	const Border = styled.div`
		border: ${dropdownOpen ? '0.3px solid lightgray;' : 'none'};
		border-radius: 3px 3px 0 0;
		height: 130%;
		width: 100%;
		position: absolute;
	`;

	const dropdownContent: IDropdownSection[] = [
		{
			title: 'Platform',
			items: [
				homeMenu,
				{
					icon: <PublicationsLogo />,
					name: 'Publications',
					route: '/publications'
				},
				{
					icon: <PeopleLogo />,
					name: 'People',
					route: '/people'
				},
				{
					icon: <EntitiesLogo />,
					name: 'Entities',
					route: '/entities'
				},
				{
					icon: <AdministraionLogo />,
					name: 'Administration',
					route: '/administration'
				}
			]
		},
		{
			title: 'Workspaces',
			items: [
				{
					icon: <HomeLogo />,
					name: 'Client contract',
					route: '/client'
				},
				{
					icon: <PublicationsLogo />,
					name: 'Supplier contract',
					route: '/supplier'
				},
				{
					icon: <PeopleLogo />,
					name: 'Corporate',
					route: '/corporate'
				},
				{
					icon: <EntitiesLogo />,
					name: 'Group Norms',
					route: '/group'
				},
				{
					icon: <AdministraionLogo />,
					name: 'Real estate contracts',
					route: '/contracts'
				}
			]
		}
	];

	const updateFilterParams = (e: HTMLInputElement): void => {
		setFilterValue(e.value);
	};

	const filterDropdownContent = (): IDropdownSection[] => {
		let items = [ ...dropdownContent ];
		if (filterValue !== '') {
			items = dropdownContent.map((x) => {
				let filtered: IDropdownItem[] = [];
				x.items.forEach((y) => {
					if (y.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase())) filtered.push(y);
				});
				x.items = [ ...filtered ];
				return x;
			});
		}
		return items;
	};

	return (
		<DropDownWrapper>
			<Border />
			<SelectedDropdownItemContainer>
				<DropdownItem icon={selectedItem.icon} route={selectedItem.route} name={selectedItem.name} />
			</SelectedDropdownItemContainer>
			{dropdownOpen ? (
				<DropDownContent>
					<DropdownFilter filterValue={filterValue} changeFilterInput={updateFilterParams} />
					{filterDropdownContent().map((item, index) => {
						if (item.items.length > 0)
							return (
								<DropdownSection
									setSelectedItem={selectItemAndCloseDropdown}
									key={item.title + index}
									items={item.items}
									title={item.title}
								/>
							);
					})}
				</DropDownContent>
			) : null}
			<DropDownToggler onClick={toggleDropdown}>
				<DownArrowSvg />
			</DropDownToggler>
		</DropDownWrapper>
	);
};

export default DropdownMenu;
