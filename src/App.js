import React from 'react';
// mantener la app en una sola pagina
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Starships from './pages/starships';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* decide que componente va renderisar por la ruta  */}
        <Route exact path="/" component={Home} />
        <Route exact path="/starships" component={Starships} />
      </Switch>
    </Router>
  );
};

export default App;
