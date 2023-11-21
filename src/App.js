import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from "./components/Header/NavBar";
import Main  from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
