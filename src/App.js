import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import Header from "./components/Header";
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';


function App() {
  return (
     <>
        <Navbar/>
        <Header/>
        <AboutMe/>
      </>
  );
};

export default App;
