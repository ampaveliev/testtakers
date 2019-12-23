import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from './Layout';
import { UsersPage, HomePage, UserPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/user/:userId' component={UserPage} />
          <Route exact path='/users' component={UsersPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
