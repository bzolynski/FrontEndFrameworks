import React from 'react';
import TopBar from './components/TopBar/TopBar';
import SidePanel from './components/SidePanel/SidePanel';
import styled from 'styled-components';
import HomePage from './pages/Home/HomePage';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
const Wrapper = styled.div`
	background: #f5f7f9;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	padding: 25px;
	display: flex;
`;
const Content = styled.div`
	width: 100%;
	margin-left: 40px;
`;

const App: React.FC = () => {
	return (
		<Router>
			<Wrapper>
				<TopBar />
				<Main>
					<SidePanel />
					<Content>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/test">TEST XD</Route>
					</Content>
				</Main>
			</Wrapper>
		</Router>
	);
};

export default App;
