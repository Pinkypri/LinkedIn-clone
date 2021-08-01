import React from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import userReducer from './Store/reducers/user'
import {createStore} from 'redux'


const store = createStore(userReducer)

const App = () => {
  return (
    <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </Router>
        </Provider>
    </div>
  );
};

export default App;
