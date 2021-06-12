import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IStore } from '../../store/reducers/reducers';
import { IUserState } from '../../store/reducers/userReducers';
import { footerFontColor } from './../../styles/colors';
import ProfilePanel from './components/ProfilePanel';
import Details from './components/Details';
import IProfile from '../../interfaces/IProfile';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid ${footerFontColor};
	background-color: white;
	width: 60%;
	padding: 20px;
	margin: auto;
`;

const UserPage: FC = () => {
	const { activeUser } = useSelector<IStore, IUserState>((state) => ({ ...state.userReducer }));
	const profile = useSelector<IStore, IProfile>((state) => state.profileReducer.profile);


	const renderProfileDetails = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <Details details={profile.details} />;
	};

	const renderPage = () => {
		if (activeUser == null) return <Wrapper>Loading...</Wrapper>;
		else
			return (
				<Wrapper>
					<ProfilePanel user={activeUser} />
					{renderProfileDetails()}
				</Wrapper>
			);
	};

	return renderPage();
};

export default UserPage;
