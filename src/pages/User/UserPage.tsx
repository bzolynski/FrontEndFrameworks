import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IStore } from '../../store/reducers/reducers';
import { IUserState } from '../../store/reducers/userReducers';
import { footerFontColor } from './../../styles/colors';
import ProfilePanel from './components/ProfilePanel';

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

	const render = () => {
		if (activeUser == null) return <h1>Loading...</h1>;
		else return <ProfilePanel user={activeUser}>{console.log('LOLO')} </ProfilePanel>;
	};
	return <Wrapper>{render()}</Wrapper>;
};

export default UserPage;
