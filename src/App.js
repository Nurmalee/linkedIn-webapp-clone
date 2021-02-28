import './App.css';
import HeaderNav from './Components/HeaderNav'
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import { UserAuthProvider } from './contextAPI/userAuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        </Switch>
      </div>
    </UserAuthProvider>
    </Router>
  );
}

export default App;
