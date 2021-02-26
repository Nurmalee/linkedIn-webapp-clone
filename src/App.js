import './App.css';
import HeaderNav from './Components/HeaderNav'
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import WidgetRight from './Components/WidgetRight';
import LoginPage from './Components/LoginPage';

function App() {
  const user = null

  return (
    <div className="App">
      <HeaderNav />
      {
        !user? <LoginPage className='loginPage'/> : (
          <div className="app__content">
          <Sidebar />
          <Feed />
          <WidgetRight />
        </div>
        )
      }
           
    </div>
  );
}

export default App;
