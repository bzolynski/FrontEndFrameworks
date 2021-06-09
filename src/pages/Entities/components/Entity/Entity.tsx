import { FC } from 'react';
import styled from 'styled-components';
import ICompany from '../../../../interfaces/ICompany';
import {linkFontColor, footerFontColor} from '../../../../styles/colors';
import {mainBoxShadowStyle} from '../../../../styles/styles';

const Wrapper = styled.div`
	height: 80px;
	padding: 7px;
	background: white;
	display: flex;
	flex-direction: row;
	border-radius: 5px;
	box-shadow: ${mainBoxShadowStyle};

`;

const Image = styled.img`
	height: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
`;
const Label = styled.h2`
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	color: ${linkFontColor};
	margin: 0px 15px;
	height: 50%;
`;
const TextContent = styled.p`
	margin-left: 15px;
	margin-right: 15px;
	font-size: 10px;
	color: ${footerFontColor};
	
`;

interface IProps {
	entity: ICompany;
}
const Entity: FC<IProps> = ({ entity }) => {
	return (
		<Wrapper>
			<Image src={entity.photo?.thumbnailUrl} />
			<Content>
				<Label>{entity.name}</Label>
				<TextContent>{entity.adress}</TextContent>
			</Content>
		</Wrapper>
	);
};

export default Entity;
