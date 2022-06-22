import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Claim from './Claim/Claim';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' > <Claim /></Route>
      </Switch>
    </Router>

  );
}

export default App;
