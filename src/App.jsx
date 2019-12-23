import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from './Layout';
import { UsersPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/user/:userId' component={() => <h1>Test user</h1>} />
          <Route path='/' component={UsersPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
