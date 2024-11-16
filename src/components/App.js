
import Home from './Home'
import Catalogue from './Catalogue';
import Connexion from './Connexion';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
    <div>
      <ul><li>
      <Link to='/Home'>Home</Link>
      </li>
            <li>
      <Link to='/Catalogue'>Catalogue</Link>
          </li>
          <li>
      <Link to='/Connexion'>Connexion</Link>
          </li>
        </ul>
    <hr/>
        </div>
            <div className="main-route-place">
  <Routes>
      <Route path="/Home" element= {<Home />} />
      <Route path="/Catalogue" element= {<Catalogue/>} />
      <Route path="/Connexion" element= {<Connexion/>} />
    </Routes>
    </div>
</BrowserRouter>
  
  );
}


export default App;

      