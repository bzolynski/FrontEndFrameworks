import { FC } from 'react';
import styled from 'styled-components';
import SideMenuItem, { ISideMenuItem } from './SideMenuItem/SideMenuItem';
import { ReactComponent as PublicationsIcon } from '../../../assets/publications.svg';
import { ReactComponent as EcosystemIcon } from '../../../assets/ecosystem.svg';
import { ReactComponent as EntitiesIcon } from '../../../assets/entities2.svg';

const sideMenuItems: ISideMenuItem[] = [
	{
		name: 'Publications',
		icon: <PublicationsIcon />,
		route: 'publications'
	},
	{
		name: 'Ecosystem',
		icon: <EcosystemIcon />,
		route: ''
	},
	{
		name: 'Entities',
		icon: <EntitiesIcon />,
		route: '/entities'
	}
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: left;
`;

const SideMenu: FC = () => {
	return (
		<Wrapper>
			{sideMenuItems.map((item, index) => (
				<SideMenuItem key={item.name + index} icon={item.icon} name={item.name} route={item.route} />
			))}
		</Wrapper>
	);
};

export default SideMenu;
