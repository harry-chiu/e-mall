import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import SideBar from 'components/SideBar';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import { Nav, Aside, Main } from './style';

const App = () => (
  <HashRouter>
    <GlobalStyle />

    <Nav>
      <NavigationBar />
    </Nav>

    <Aside>
      <SideBar />
    </Aside>

    <Main>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Redirect to="/" />
      </Switch>
    </Main>
  </HashRouter>
);

export default App;
