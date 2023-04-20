import './App.css';
import AllRoutes from './routes/AllRoutes';
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;