import { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchLogo } from '../../../assets/search.svg';

const Wrapper = styled.div`
	border: 0.3px lightgray solid;
	border-radius: 2px;
	display: flex;
	align-items: center;
	width: 30%;
	padding: 2px 5px;
`;
const Input = styled.input`
	border: none;
	width: 100%;
	height: 20px;

	:focus {
		outline: none;
	}
`;



const SearchBar: FC = () => {
	return (
		<Wrapper>
			<Input placeholder="Search Legalcluster" />
			<SearchLogo />
		</Wrapper>
	);
};

export default SearchBar;
