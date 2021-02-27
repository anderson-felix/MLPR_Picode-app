import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.css';

import { HomePage } from './pages/Home';

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
