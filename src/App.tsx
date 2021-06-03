import React from 'react';
import TopBar from './components/TopBar/TopBar';
import SidePanel from './components/SidePanel/SidePanel';
import styled from 'styled-components';
import HomePage from './pages/Home/HomePage';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
const Wrapper = styled.div`
	background: #f5f7f9;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	padding: 25px;
	display: flex;
`;
const Content = styled.div`
	width: 75%;
	padding-left: 45px;
	padding-right: 75px;
	display: inline-block;
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
