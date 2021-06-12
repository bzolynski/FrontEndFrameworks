import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';
import LabelInput from '../../../components/common/LabelInput';
import IUser from '../../../interfaces/IUser';
import { updateActiveUser } from '../../../store/actions/userActions';
import { mainFontColor, secondaryFontColor } from './../../../styles/colors';

type UpdateUser = ReturnType<typeof updateActiveUser>;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const DisplaySection = styled.div`
	display: flex;
	flex-direction: row;
`;

const UserPhoto = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 20px;
`;

const UserNameSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100px;
	h3 {
		font-size: 15px;
		font-weight: bold;
		color: ${mainFontColor};
	}
	p {
		color: ${secondaryFontColor};
		font-size: 12px;
	}
`;
const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: auto;
`;

const StyledPenLogo = styled(PenLogo)`
	margin-left: auto;
    height: 10px;
    width: 10px;
    cursor: pointer;
    &:hover{
        scale: 1.1;
    }
`;

const EmailSection = styled.div`
	display: flex;
	flex-direction: column;
	p {
		color: ${secondaryFontColor};
		font-size: 12px;
	}
`;

const FormSection = styled.form <{ isEditing: boolean }>`
		margin-top: 20px;
		display: ${(p) => (p.isEditing ? 'flex' : 'none')};
		flex-direction: column;
	`;

interface IProps {
	user: IUser;
}
const ProfilePanel: FC<IProps> = ({ user }) => {
	const dispatch = useDispatch();
	const [ isEditing, setIsEditing ] = useState<boolean>(false);

	let userForm: IUser = user;

	const onLostFocus = (value: string, name: string) => {
		userForm = { ...userForm, [name]: value };
	};

	const onFormSubmit = () => {
		dispatch<UpdateUser>(updateActiveUser(userForm));
		setIsEditing(false);
	};

	return (
		<Wrapper>
			<DisplaySection>
				<UserPhoto src={user.photo.thumbnailUrl} />
				<UserNameSection>
					<h3>{user.name}</h3>
					<p>{user.company.name}</p>
				</UserNameSection>
				<RightSection>
					<StyledPenLogo onClick={(e) => setIsEditing(!isEditing)} />
					<EmailSection>
						<p>{user.email}</p> <p>{user.phone}</p>
					</EmailSection>
				</RightSection>
			</DisplaySection>
			<FormSection isEditing={isEditing}>
				<LabelInput onLostFocus={onLostFocus} name={'name'} type={'text'} defaultValue={userForm.name} />
				<LabelInput
					onLostFocus={onLostFocus}
					name={'username'}
					placeholder="Username"
					type="text"
					defaultValue={userForm.username}
				/>
				<LabelInput
					onLostFocus={onLostFocus}
					name={'email'}
					placeholder="Email"
					type="email"
					defaultValue={userForm.email}
				/>
				<LabelInput
					onLostFocus={onLostFocus}
					name={'phone'}
					placeholder="Phone number"
					type="string"
					defaultValue={userForm.phone}
				/>
				<button onClick={() => onFormSubmit()} type="button">
					Accept
				</button>
			</FormSection>
		</Wrapper>
	);
};

export default ProfilePanel;
