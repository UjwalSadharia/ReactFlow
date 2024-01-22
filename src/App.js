
import './App.css';
import MainComponent from './Maincomponent';
import Sidebar from './Sidebar';
import Compact from './compact';
function App() {
  return (
    <div className='App'>
      {/* <Sidebar /> */}
      <div style={{  width: '100vw', height: '100vh' }}>
        {/* <Compact /> */}
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
