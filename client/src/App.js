import './App.css';
import './assets/css/blogCard.css';
import './assets/css/loginRegister.css';
import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
