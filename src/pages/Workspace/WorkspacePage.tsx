import { FC, useState } from 'react';
import styled from 'styled-components';
import { getEntities } from '../../store/actions/entityActions';
import ResumeWork from '../Home/components/ResumeWork/ResumeWork';
import officeJPG from '../../assets/office.jpg';
import { ReactComponent as EntitiesLogo } from '../../assets/entities2.svg';
import { ReactComponent as StructureLogo } from '../../assets/structure.svg';
import { ReactComponent as CalendarLogo } from '../../assets/calendar.svg';
import { footerFontColor, linkFontColor, mainFontColor, secondaryFontColor } from '../../styles/colors';
import Panel from './components/Panel';
import { mainBoxShadowStyle } from '../../styles/styles';
import { Route } from 'react-router-dom';
import StyledLink from '../../components/common/StyledLink';
import InputFilter from '../../components/common/InputFilter/InputFilter';
import { useSelector } from 'react-redux';
import { IStore } from '../../store/reducers/reducers';
import { IWorkState } from '../../store/reducers/worksReducer';
import IWork from '../../interfaces/IWork';
type GetEntities = ReturnType<typeof getEntities>;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;
const Top = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Photo = styled.div`
	width: 100%;
	height: 150px;
	background-image: url(${officeJPG});
	background-repeat: no-repeat;
	background-size: cover;
`;
const WorkspaceTypePanel = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 10px;
`;

const StyledEntitiesLogo = styled(EntitiesLogo)`
    height: 50px;
    width: 50px;
    padding: 10px;
`;

const SomeTextContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

const Label = styled.h2`
	width: 100%;
	font-size: 20px;
	font-weight: 600;
	color: ${mainFontColor};
	margin-bottom: 10px;
`;

const TextContent = styled.p`
	font-size: 15px;
	color: ${footerFontColor};
`;

const HidePanel = styled.div`
	box-shadow: ${mainBoxShadowStyle};
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 0.2px solid ${footerFontColor};
	padding: 20px;
	background: white;
	margin-bottom: 25px;
`;

const TopOfHidePanel = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	p {
		color: ${footerFontColor};
		:nth-child(2) {
			cursor: pointer;
			&:hover {
				color: ${linkFontColor};
			}
		}
		font-size: 13px;
	}
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const FilterBar = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: space-between;
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: row;
`;

const WorkspacePage: FC = () => {
	const [ isHidePanelOpen, setIsHidePanelOpen ] = useState<boolean>(false);
	const [ filterValue, setFilterValue ] = useState<string>('');
	const { works } = useSelector<IStore, IWorkState>((state) => {
		return { ...state.worksReducer };
	});

	const PanelForPanels = styled.div`
		display: ${isHidePanelOpen ? 'flex' : 'none'};
		flex-direction: row;
		margin-top: 15px;
		justify-content: space-evenly;
	`;

	const filterWorks = () => {
		let filteredWorks: IWork[] = [];
		if (filterValue != null) {
			works.forEach((work) => {
				if (work.name.toLowerCase().match(filterValue.toLowerCase())) {
					filteredWorks.push(work);
				}
			});
		} else {
			filteredWorks = works;
		}
		return filteredWorks;
	};

	return (
		<Wrapper>
			<Top>
				<Photo />
				<WorkspaceTypePanel>
					<StyledEntitiesLogo />
					<SomeTextContainer>
						<Label>Corporate holdings</Label>
						<TextContent>
							Workspace purpose and a bit of context. This much needed description is here to remind
							people where they are, if they are new or have poor memory.
						</TextContent>
					</SomeTextContainer>
				</WorkspaceTypePanel>
				<HidePanel>
					<TopOfHidePanel>
						<p>Start working on corporate matters</p>
						{isHidePanelOpen ? (
							<p onClick={(e) => setIsHidePanelOpen(false)}>{'hide'}</p>
						) : (
							<p onClick={(e) => setIsHidePanelOpen(true)}>{'open'}</p>
						)}
					</TopOfHidePanel>
					<PanelForPanels>
						<StyledLink to={'/entities'}>
							<Panel
								title={'Explore your entities'}
								logo={EntitiesLogo}
								content={
									'Take a few minutes to look at the most important elements and specificities of your entities'
								}
							/>
						</StyledLink>
						<Panel
							title={'Structure the ownership'}
							logo={StructureLogo}
							content={
								'Get a clear view of the ownership by looking at the relations between individuals and entities'
							}
						/>
						<Panel
							title={'Define the calendar'}
							logo={CalendarLogo}
							content={'Prepare future events byu creating detailed plans around the life of your entity'}
						/>
					</PanelForPanels>
				</HidePanel>
			</Top>
			<Bottom>
				<FilterBar>
					<Label>Lastest updates</Label>
					<RightSide>
						<InputFilter setValue={setFilterValue} />
					</RightSide>
				</FilterBar>
				<ResumeWork works={filterWorks()} />
			</Bottom>
		</Wrapper>
	);
};

export default WorkspacePage;
