import './App.css';
import HeaderNav from './Components/HeaderNav'
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="app__content">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
