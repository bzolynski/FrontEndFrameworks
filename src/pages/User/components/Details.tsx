import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';
import LabelInputAcceptButton from '../../../components/common/LabelInputAcceptButton';
import { IDetail, IDetails } from '../../../interfaces/IProfile';
import { updateDetails } from '../../../store/actions/profileActions';
import { secondaryFontColor } from '../../../styles/colors';

type UpdateDetails = ReturnType<typeof updateDetails>;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
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
const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Label = styled.h2`
	color: ${secondaryFontColor};
	font-size: 12px;
	padding: 10px;
`;

const Tile =
	styled.div <
	{ isEditing: boolean } >
	`
	border-radius: 3px;
	background-color: #e6f0f3;
	color: #8bbac7;
	padding: 4px;
	font-size: 12px;
	font-weight: bold;
	&:hover{
		transform: ${(p) => (p.isEditing ? 'scale(1.03)' : 'none')};
	}
	cursor: ${(p) => (p.isEditing ? 'pointer' : 'default')};
	p{
		margin-left: 5px;
		font-size: 10px;
		color: black;
		display: ${(p) => (p.isEditing ? 'inline-block' : 'none')};
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5px;
`;

const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormSection =
	styled.form <
	{ isEditing: boolean } >
	`
		margin-top: 20px;
		display: ${(p) => (p.isEditing ? 'flex' : 'none')};
		flex-direction: column;
	`;

enum DetailType {
	EXPERTISE = 'EXPERTISE',
	SPECIALITY = 'SPECIALITY',
	ADMISSION = 'ADMISSION',
	COUNTY = 'COUNTY'
}

type IProps = {
	details: IDetails;
};
const Details: FC<IProps> = ({ details }) => {
	const [ isEditing, setIsEditing ] = useState<boolean>(false);
	const dispatch = useDispatch();
	const removeTile = (id: string, type: DetailType) => {
		switch (type) {
			case DetailType.EXPERTISE: {
				const expertises = details.expertises.filter((x) => x.id !== id);
				const newDetails = { ...details, expertises };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.ADMISSION: {
				const admissions = details.admissions.filter((x) => x.id !== id);
				const newDetails = { ...details, admissions };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.COUNTY: {
				const counties = details.counties.filter((x) => x.id !== id);
				const newDetails = { ...details, counties };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.SPECIALITY: {
				const specialities = details.specialities.filter((x) => x.id !== id);
				const newDetails = { ...details, specialities };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
		}
	};

	const getEnumFromString = <T extends {}>(type: T, str: string): T[keyof T] => {
		const casted = str as keyof T;
		return type[casted];
	};

	const onAccept = (value: string, name: string) => {
		const detailType = getEnumFromString(DetailType, name);
		switch (detailType) {
			case DetailType.EXPERTISE: {
				const expertises = details.expertises.map((x) => x);
				const newExpertise: IDetail = {
					id: uuidv4(),
					value: value
				};
				expertises.push(newExpertise);
				const newDetails = { ...details, expertises };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.ADMISSION: {
				const admissions = details.admissions.map((x) => x);
				const newAdmission: IDetail = {
					id: uuidv4(),
					value: value
				};
				admissions.push(newAdmission);
				const newDetails = { ...details, admissions };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.COUNTY: {
				const counties = details.counties.map((x) => x);
				const newCounty: IDetail = {
					id: uuidv4(),
					value: value
				};
				counties.push(newCounty);
				const newDetails = { ...details, counties };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
			case DetailType.SPECIALITY: {
				const specialities = details.specialities.map((x) => x);
				const newSpeciality: IDetail = {
					id: uuidv4(),
					value: value
				};
				specialities.push(newSpeciality);
				const newDetails = { ...details, specialities };
				dispatch<UpdateDetails>(updateDetails(newDetails));
				break;
			}
		}
	};

	return (
		<Wrapper>
			<DetailWrapper>
				<TopBar>
					<Label>Expertises</Label>
					<StyledPenLogo onClick={() => setIsEditing(!isEditing)} />
				</TopBar>
				<Container>
					{details.expertises.map((x) => (
						<Tile onClick={(e) => removeTile(x.id, DetailType.EXPERTISE)} isEditing={isEditing} key={x.id}>
							{x.value}
							<p>x</p>
						</Tile>
					))}
				</Container>
			</DetailWrapper>
			<DetailWrapper>
				<Label>Specialities</Label>
				<Container>
					{details.specialities.map((x) => (
						<Tile onClick={(e) => removeTile(x.id, DetailType.SPECIALITY)} isEditing={isEditing} key={x.id}>
							{x.value}
							<p>x</p>
						</Tile>
					))}
				</Container>
			</DetailWrapper>
			<DetailWrapper>
				<Label>Admission to practice lawe</Label>
				<Container>
					{details.admissions.map((x) => (
						<Tile onClick={(e) => removeTile(x.id, DetailType.ADMISSION)} isEditing={isEditing} key={x.id}>
							{x.value}
							<p>x</p>
						</Tile>
					))}
				</Container>
			</DetailWrapper>
			<DetailWrapper>
				<Label>Counties</Label>
				<Container>
					{details.counties.map((x) => (
						<Tile onClick={(e) => removeTile(x.id, DetailType.COUNTY)} isEditing={isEditing} key={x.id}>
							{x.value}
							<p>x</p>
						</Tile>
					))}
				</Container>
			</DetailWrapper>
			<FormSection isEditing={isEditing}>
				<LabelInputAcceptButton
					type="text"
					buttonText="add"
					label="expertises"
					placeholder="New expertise..."
					onAccept={onAccept}
					name={DetailType.EXPERTISE}
				/>
				<LabelInputAcceptButton
					type="text"
					buttonText="add"
					label="specialities"
					placeholder="New speciality..."
					onAccept={onAccept}
					name={DetailType.SPECIALITY}
				/>
				<LabelInputAcceptButton
					type="text"
					buttonText="add"
					label="admissions"
					placeholder="New admission..."
					onAccept={onAccept}
					name={DetailType.ADMISSION}
				/>
				<LabelInputAcceptButton
					type="text"
					buttonText="add"
					label="counties"
					placeholder="New county..."
					onAccept={onAccept}
					name={DetailType.COUNTY}
				/>
			</FormSection>
		</Wrapper>
	);
};

export default Details;
