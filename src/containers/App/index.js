import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import { Nav, Main } from './style';

const App = () => (
  <>
    <GlobalStyle />

    <Nav>
      <NavigationBar />
    </Nav>

    <Main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Main>
  </>
);

export default App;
