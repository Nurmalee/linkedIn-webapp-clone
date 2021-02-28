import './App.css';
import HeaderNav from './Components/HeaderNav'
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import { UserAuthProvider } from './contextAPI/userAuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
    <UserAuthProvider>
      <div className="App">
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LoginPage} />
          <Route path="/resetPassword" component={ResetPassword} />
        </Switch>
      </div>
    </UserAuthProvider>
    </Router>
  );
}

export default App;
