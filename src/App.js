import './App.css';
import "./App.css";
import WebApp from './components/pages/WebApp';
import LoginForm from './components/loginform';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useAuth } from './components/context/AuthContext';
import * as ROUTES from "./components/constants/routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <PrivateRoute path={ROUTES.WEB_APP}>
          <WebApp />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
