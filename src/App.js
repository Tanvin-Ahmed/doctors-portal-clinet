import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
