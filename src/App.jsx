import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/Login';

import './App.css';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from "./components/Success"

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
      <Footer />
      <LocationDisplay />
    </>
  );
}

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

export default App;
