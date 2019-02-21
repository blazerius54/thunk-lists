import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DataContainer from './containers/DataContainer';
import Header from './components/Header';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/:dataType" component={DataContainer} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
