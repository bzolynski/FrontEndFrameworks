import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import IWork from '../../../../interfaces/IWork';
import { mainFontColor } from '../../../../styles/colors';
import Select from 'react-select';
import './paginator.css';
import Work from './Resume/Work';
import InputFilter from '../../../../components/common/InputFilter/InputFilter';
import { IStore } from '../../../../store/reducers/reducers';
import { IWorkState } from '../../../../store/reducers/worksReducer';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 2px;
	border-radius: 5px;
	position: relative;
	align-items: center;
`;
const StyledSelect = styled(Select)`
    width: 300px;
`;
const FilterBar = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;
`;
const Label = styled.h1`
	margin: 20px;
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: row;
`;

enum Filter {
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
	label?: string;
}

const ResumeWork: FC<IProps> = ({ label }) => {
	const perPage = 10;
	const { works } = useSelector<IStore, IWorkState>((state) => ({ ...state.worksReducer }));
	const [ currentPage, setCurrentPage ] = useState<number>(0);
	const [ offset, setOffset ] = useState<number>(0);
	const [ filterValue, setFilterValue ] = useState<string>('');
	const [ selectedFilter, setSelectedFilter ] = useState<Filter>(Filter.all);

	const handlePageClick = (data: any) => {
		const selectedPage: number = data.selected;
		const offset = selectedPage * perPage;
		setCurrentPage(selectedPage);
		setOffset(offset);
	};

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
		let moreFilteredWorks: IWork[] = [];
		if (selectedFilter === Filter.my) {
			filteredWorks.forEach((work) => {
				if (work.user.id === 1) {
					moreFilteredWorks.push(work);
				}
			});
		} else {
			moreFilteredWorks = filteredWorks;
		}

		return moreFilteredWorks;
	};

	return (
		<Wrapper>
			<FilterBar>
				<Label>{label}</Label>
				<RightSide >
					<InputFilter setValue={setFilterValue} />
					<StyledSelect
						options={enumList}
						defaultValue={enumList[0]}
						onChange={(e: IOption) => setSelectedFilter(e.value)}
					/>
				</RightSide>
			</FilterBar>

			<Container>
				{filterWorks().slice(offset, offset + perPage).map((work) => <Work key={work.id} work={work} />)}
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={filterWorks().length / perPage}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName={'pagination'}
					activeClassName={'active'}
					initialPage={currentPage}
				/>
			</Container>
		</Wrapper>
	);
};

export default ResumeWork;
