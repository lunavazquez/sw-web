import React from 'react';
// mantener la app en una sola pagina
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './pages/home';
import Starships from './pages/starships';
import background from './assets/124129.jpg';
import styles from './App.sass';

const App = () => {
  return (
    <div className={styles.App} style={{ backgroundImage: `url(${background})` }}>
      <Router history={createBrowserHistory()}>
        <Switch>
          {/* decide que componente va renderisar por la ruta  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/starships/:episode" component={Starships} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
