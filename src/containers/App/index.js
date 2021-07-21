import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import { Container, Main } from './style';

const App = () => (
  <Container>
    <GlobalStyle />
    <NavigationBar />

    <Main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Main>
  </Container>
);

export default App;
