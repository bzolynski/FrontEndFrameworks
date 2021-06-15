import { FC, MouseEvent } from 'react';
import useDropdown from 'react-dropdown-hook';
import Select from 'react-select';
import styled from 'styled-components';
import { ReactComponent as ArrowDownLogo } from '../../../assets/down-arrow.svg';
import { ReactComponent as FilterLogo } from '../../../assets/filter.svg';
import { ReactComponent as MaximizeLogo } from '../../../assets/maximize.svg';
import { ReactComponent as DotsLogo } from '../../../assets/more.svg';
import { ReactComponent as ShareLogo } from '../../../assets/share.svg';
import { ReactComponent as ArrowUpLogo } from '../../../assets/up-arrow.svg';
import InputFilter from '../../../components/common/InputFilter/InputFilter';
import { footerFontColor, mainFontColor } from '../../../styles/colors';
import Filters from './Filters';

const StyledSelect = styled(Select)`
    width: 300px;
`;
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
	align-items: center;
	gap: 15px;
	> svg {
		height: 15px;
		width: 15px;
		cursor: pointer;
		:hover {
			transform: scale(1.1);
		}
	}
`;

const Arrows = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	width: 30px;
	:hover {
		transform: scale(1.1);
	}
	svg {
		height: 15px;
		width: 15px;
	}
`;

const DropDownWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: left;
	> svg {
		height: 15px;
		width: 15px;
		cursor: pointer;
		:hover {
			transform: scale(1.1);
		}
	}
`;

const Separator = styled.div`
	height: 20px;
	border-right: 1px solid ${footerFontColor};
`;

export const mosaicView = `display: grid;
grid-template-columns: 24.5% 24.5% 24.5% 24.5%;
gap: 8px;`;
export const listView = `display: flex;
flex-direction: column;
div {
	margin-top: 8px;
}`;
export enum SortDirection {
	none = 0,
	asc = 1,
	desc = -1
}

export enum Filter {
	all,
	my
}
interface IOption {
	value: Filter;
	label: string;
}

const enumList: IOption[] = [
	{
		value: Filter.all,
		label: 'All items'
	},
	{
		value: Filter.my,
		label: 'My items'
	}
];
interface IProps {
	setViewStyle: Function;
	setFilterValue: Function;
	setSelectedFilter: Function;
	setIsMaximized: (isMaximized: boolean) => void;
	isMaximized: boolean;
	sortDirection: SortDirection;
	setSortDirection: (sortDirection: SortDirection) => void;
}
const TopBar: FC<IProps> = (props: IProps) => {
	const [ wrapperRef, dropdownOpen, toggleDropdown, closeDropdown ] = useDropdown();

	const changeStyle = (event: MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLElement;
		props.setViewStyle(target.dataset.style);
	};
	const setSortDirection = () => {
		const currentDir = props.sortDirection;
		switch (currentDir) {
			case -1: {
				props.setSortDirection(SortDirection.none);
				break;
			}
			case 0: {
				props.setSortDirection(SortDirection.asc);
				break;
			}
			case 1: {
				props.setSortDirection(SortDirection.desc);
				break;
			}
		}
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
					<DotsLogo />
					<Separator />
					<Arrows onClick={() => setSortDirection()}>
						{props.sortDirection !== SortDirection.desc ? <ArrowUpLogo /> : null}
						{props.sortDirection !== SortDirection.asc ? (
							<ArrowDownLogo style={{ marginLeft: 'auto' }} />
						) : null}
					</Arrows>
					<DropDownWrapper ref={wrapperRef}>
						<FilterLogo onClick={toggleDropdown} />
						{dropdownOpen ? <Filters /> : null}
					</DropDownWrapper>
					<Separator />
					<MaximizeLogo onClick={() => props.setIsMaximized(!props.isMaximized)} />
					<Separator />
					<ShareLogo onClick={() => navigator.clipboard.writeText(window.location.href)} />
				</LeftBottom>
				<InputFilter setValue={props.setFilterValue} />
				<StyledSelect
					options={enumList}
					defaultValue={enumList[0]}
					onChange={(e: IOption) => props.setSelectedFilter(e.value)}
				/>
			</Bottom>
		</Wrapper>
	);
};

export default TopBar;
