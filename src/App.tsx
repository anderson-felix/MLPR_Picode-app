import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { observer } from "mobx-react-lite";
import "bootstrap/dist/css/bootstrap.css";

import { HomePage } from "./pages/Home";
import { CreateBook } from "./pages/CreateBook";

const App = observer(() => {
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <Router history={history}>
        <Route path="/books" exact component={HomePage} />
        <Route path="/createBook" exact component={CreateBook} />
        <Route path="/" exact render={() => <Redirect to={"/books"} />} />
      </Router>
    </React.Fragment>
  );
});

export default App;
