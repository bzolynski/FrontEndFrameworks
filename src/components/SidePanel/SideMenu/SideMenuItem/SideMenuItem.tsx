import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { hoverFontColor, mainFontColor } from '../../../../styles/colors';
import StyledLink from '../../../common/StyledLink';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
	svg {
		height: 2rem;
		width: 2rem;
		margin-right: 20px;
	}
	font-weight: bold;
	font-size: 14px;
	color: ${mainFontColor};
	&:hover {
		color: ${hoverFontColor};
	}
`;

const MoreStyledLink = styled(StyledLink)`
	margin-bottom: 2px;
	width: 100%;
	margin-top: 10px;
	margin-left: 35px;
`;

export interface ISideMenuItem {
	icon: ReactElement;
	name: string;
	route: string;
}

const SideMenuItem: FC<ISideMenuItem> = ({ icon, name, route }) => {
	return (
		<MoreStyledLink to={route}>
			<Wrapper>
				{icon} {name}
			</Wrapper>
		</MoreStyledLink>
	);
};

export default SideMenuItem;
