import { FC } from 'react';
import { ReactComponent as BellLogo } from '../../../assets/bell.svg';
import { ReactComponent as CommentsLogo } from '../../../assets/comments.svg';
import { ReactComponent as HomeLogo } from '../../../assets/house.svg';
import styled from 'styled-components';
const Panel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 10rem;
`;

const RightButtons: FC = () => {
	return (
		<Panel>
			<HomeLogo />
			<CommentsLogo />
			<BellLogo />
		</Panel>
	);
};

export default RightButtons;
