import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import IWork from '../../../../interfaces/IWork';
import { mainFontColor } from '../../../../styles/colors';
import './paginator.css';
import Work from './Resume/Work';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 2px;
	border-radius: 5px;
	position: relative;
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

interface IProps {
	label?: string;
	works : IWork[]

}

const ResumeWork: FC<IProps> = ({ works, label }) => {
	const [ curretnPage, setCurrentPage ] = useState<number>(1);
	const [ offset, setOffset ] = useState<number>(0);
	const perPage = 10;

	const handlePageClick = (data: any) => {
		const selectedPage: number = data.selected;
		const offset = selectedPage * perPage;
		setCurrentPage(selectedPage);
		setOffset(offset);
	};
	return (
		<Wrapper>
			{label ? <Label>{label}</Label> : <div />}

			<Container>				
				{works.slice(offset, offset + perPage).map((work) => <Work key={work.id} work={work} />)}
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={works.length / perPage}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageClick}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
			</Container>
		</Wrapper>
	);
};

export default ResumeWork;
