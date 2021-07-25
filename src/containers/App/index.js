import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import ProductListPage from 'containers/ProductListPage';
import ProductDetailPage from 'containers/ProductDetailPage';
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
        <Route exact path="/products/:categoryId" component={ProductListPage} />
        <Route
          path="/products/:categoryId/:productId"
          component={ProductDetailPage}
        />

        <Redirect from="/products" to="/products/all" />
        <Redirect to="/" />
      </Switch>
    </Main>
  </HashRouter>
);

export default App;
