/* eslint-disable react/jsx-fragments */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.css';

import { HomePage } from './pages/HomePage';

const App = observer(() => {
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <Router history={history}>
        <Route path="/" exact component={HomePage} />
      </Router>
    </React.Fragment>
  );
});

export default App;
