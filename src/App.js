import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {store} from "./store/store";
import {Home} from "./pages/main/Main";
import {DetailsPage} from "./pages/details/DetailsPage";

import './App.scss';
import {Provider} from "react-redux";


function App() {
  return (
      <Provider store={store}>
          <Router>
              <Switch>
                  {<Route exact path="/" component={ Home }/>}
                  {<Route path="/search/:searchQuery" component={ Home }/>}
                  {<Route path="/movie/:id" component={ DetailsPage }/>}
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
