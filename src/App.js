import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Claim from './Claim/Claim';
import { ToastContainer } from "react-toastify";
import useEagerConnect from './hooks/useEagerConnect';
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEagerConnect();
  return (
    <><ToastContainer style={{ fontSize: 20 }} />
      <Router>
        <Switch>
          <Route exact path='/' > <Claim /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
