import logo from './logo.svg';
import './App.css';
import AllRoutes from "./component/AllRoutes"
import Navbar from "./component/Navbar"

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Navbar/>
    </div>
  );
}

export default App;
