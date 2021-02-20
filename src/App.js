import './App.css';
import HeaderNav from './Components/HeaderNav'
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import WidgetRight from './Components/WidgetRight';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="app__content">
        <Sidebar />
        <Feed />
        <WidgetRight />
      </div>
    </div>
  );
}

export default App;
