import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from './Layout';
import { UsersPage, HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/user/:userId' component={() => <h1>Test user</h1>} />
          <Route exact path='/users' component={UsersPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
