import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import InputFilter from '../../../../components/common/InputFilter/InputFilter';
import { mainFontColor } from '../../../../styles/colors';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
`;
const Top = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Label = styled.h1`
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const DisplayMethodContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const LeftBottom = styled.div`
	display: flex;
	flex-direction: row;
`;

export const mosaicView = `display: grid;
grid-template-columns: 24.5% 24.5% 24.5% 24.5%;
gap: 8px;`;
export const listView = `display: flex;
flex-direction: column;
div {
	margin-top: 8px;
}`;

interface IProps {
	setViewStyle: Function;
	setFilterValue: Function;
}
const TopBar: FC<IProps> = ({ setViewStyle, setFilterValue }) => {
	const changeStyle = (event: MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLElement;
		setViewStyle(target.dataset.style);
	};
	return (
		<Wrapper>
			<Top>
				<Label>Entities</Label>
				<DisplayMethodContainer>
					<button data-style={mosaicView} onClick={changeStyle}>
						Mosaic
					</button>
					<button data-style={listView} onClick={changeStyle}>
						List
					</button>
				</DisplayMethodContainer>
			</Top>
			<Bottom>
				<LeftBottom>
					<p>Tu_będzie_filter_i_sortowanie_XD</p>
				</LeftBottom>
				<InputFilter setValue={setFilterValue} />
			</Bottom>
		</Wrapper>
	);
};

export default TopBar;
