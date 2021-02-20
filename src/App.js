import './App.css';
import HeaderNav from './Components/HeaderNav'
import Sidebar from './Components/Sidebar';
import WidgetRight from './Components/WidgetRight';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="app__content">
        <Sidebar />
        <WidgetRight />
      </div>
    </div>
  );
}

export default App;
