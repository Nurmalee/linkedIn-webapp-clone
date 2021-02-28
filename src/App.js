import './App.css';
import HeaderNav from './Components/HeaderNav'
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import { UserAuthProvider } from './contextAPI/userAuthContext'

function App() {
  return (
    <UserAuthProvider>
      <div className="App">
        <HeaderNav />
        <SignUp />
        <Dashboard />
      </div>
    </UserAuthProvider>
  );
}

export default App;
