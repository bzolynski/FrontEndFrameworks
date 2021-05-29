import { FC } from 'react';
import styled from 'styled-components';
import DropDownMenu from './DropdownMenu/DropdownMenu';
import { ReactComponent as mainLogo } from '../../assets/logo.svg';
import RightButtons from './RightButtons/RightButtons';
import SearchBar from './SearchBar/SearchBar';
import StyledLink from '../common/StyledLink';
const TopBarWrapper = styled.div`
	position: sticky;
	top: 0;
	border: 0px solid black;
	box-shadow: 0px 2px 8px lightgray;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background: white;
`;

const MainLogo = styled(mainLogo)`
	height: 2rem;
	width: 2rem;
	margin-right: 20px;
`;

const LeftMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TopBar: FC = () => {
	return (
		<TopBarWrapper>
			<LeftMenuWrapper>
				<StyledLink to="/">
					<MainLogo />
				</StyledLink>
				<DropDownMenu />
			</LeftMenuWrapper>

			<SearchBar />
			<RightButtons />
		</TopBarWrapper>
	);
};

export default TopBar;
