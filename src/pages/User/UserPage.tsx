import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IStore } from '../../store/reducers/reducers';
import { IUserState } from '../../store/reducers/userReducers';
import { footerFontColor } from './../../styles/colors';
import ProfilePanel from './components/ProfilePanel';
import Details from './components/Details';
import PanelInformations from './components//PanelInformations';
import IProfile from '../../interfaces/IProfile';
import Proposals from './components/Proposals';
import Reviews from './components/Reviews';
import Fees from './components/Fees';
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

const Spacer = styled.div`
	margin: 15px;
	border-top: 0.2px solid ${footerFontColor};
`;

const UserPage: FC = () => {
	const { activeUser } = useSelector<IStore, IUserState>((state) => ({ ...state.userReducer }));
	const profile = useSelector<IStore, IProfile>((state) => state.profileReducer.profile);

	const renderProfileDetails = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <Details details={profile.details} />;
	};

	const renderPanelInfo = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <PanelInformations panelInfo={profile.panelInformations} />;
	};

	const renderProposals = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <Proposals proposals={profile.proposals} />;
	};

	const renderReviews = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <Reviews reviews={profile.reviews} />;
	};

	const renderFees = () => {
		if (profile == null) return <h1>Loading...</h1>;
		else return <Fees fees={profile.fees} />;
	};
	const renderPage = () => {
		if (activeUser == null) return <Wrapper>Loading...</Wrapper>;
		else
			return (
				<Wrapper>
					<ProfilePanel user={activeUser} />
					<Spacer />
					{renderProfileDetails()}
					<Spacer />
					{renderPanelInfo()}
					<Spacer />
					{renderProposals()}
					<Spacer />
					{renderReviews()}
					<Spacer />
					{renderFees()}
				</Wrapper>
			);
	};

	return renderPage();
};

export default UserPage;
