import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as NetworkIcon } from '../../../assets/network.svg';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as PublicationsIcon } from '../../../assets/publications.svg';
import { ReactComponent as NetworkPlusIcon } from '../../../assets/user-plus.svg';
import { IStore } from '../../../store/reducers/reducers';
import { IUserState } from '../../../store/reducers/userReducers';
import ActionButton, { IActionButton } from './ActionButton/ActionButton';

const actionButtons: IActionButton[] = [
	{
		name: 'Your network',
		icon: <NetworkIcon />,
		buttonIcon: <NetworkPlusIcon />,
		route: ''
	},
	{
		name: 'Your publications',
		icon: <PublicationsIcon />,
		buttonIcon: <PlusIcon />,
		route: ''
	}
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: white;
	//border: 0.3px solid lightgray;
	border-radius: 3px;
	box-shadow: 2px 2px 8px lightgray;
`;

const PersonDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// VV to jest góra dół
	justify-content: center;
	padding: 25px;
	border-bottom: 0.3px solid lightgray;
`;

const Pope = styled.img`
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
`;

const PersonName = styled.h5`
	margin-top: 10px;
	font-weight: 600;
	color: #4356a8;
	font-size: 15px;
`;

const PersonCompany = styled.h6`
	font-weight: 500;
	margin-top: 10px;
	color: #8a8e94;
	font-size: 12px;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// VV to jest góra dół
	justify-content: center;
	padding: 5px 15px;
`;

const Card: FC = () => {
	const { activeUser } = useSelector<IStore, IUserState>((state) => {
		return { ...state.userReducer };
	});
	if (activeUser == null) return <h1>Loading...</h1>;
	else {
		return (
			<Wrapper>
				<PersonDetails>
					<Pope src={activeUser.photo.url} />
					<PersonName>{activeUser.name}</PersonName>
					<PersonCompany>{activeUser.company.name}</PersonCompany>
				</PersonDetails>
				<Actions>
					{actionButtons.map((item, index) => (
						<ActionButton
							key={item.name + index}
							icon={item.icon}
							buttonIcon={item.buttonIcon}
							name={item.name}
							route={item.route}
						/>
					))}
				</Actions>
			</Wrapper>
		);
	}
};

export default Card;
