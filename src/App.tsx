import React from 'react';
import TopBar from './components/TopBar/TopBar';
import SidePanel from './components/SidePanel/SidePanel';
import styled from 'styled-components';
import HomePage from './pages/Home/HomePage';
import EntitiesPage from './pages/Entities/EntitiesPage';
import WorkspacePage from './pages/Workspace/WorkspacePage';
import UserPage from './pages/User/UserPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getWorks } from './store/actions/workActions';
import { useDispatch } from 'react-redux';
import { getActiveUser } from './store/actions/userActions';
type GetWorks = ReturnType<typeof getWorks>;
type GetActiveUser = ReturnType<typeof getActiveUser>;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: #f5f7f9;
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
	const dispatch = useDispatch();
	dispatch<GetWorks>(getWorks());
	dispatch<GetActiveUser>(getActiveUser(1));

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
						<Route path="/entities">
							<EntitiesPage />
						</Route>
						<Route path="/workspaces">
							<WorkspacePage />
						</Route>
						<Route path="/user">
							<UserPage />
						</Route>
					</Content>
				</Main>
			</Wrapper>
		</Router>
	);
};

export default App;
