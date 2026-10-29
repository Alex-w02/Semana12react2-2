import { Routes, Route, Link } from 'react-router-dom';
import Lista from './Lista';
import Agregar from './Agregar';
import './App.css';
// Componente raíz: barra de navegación + área de rutas.
function App() {
 return (
 <div>
 <nav className="navbar">
 <span className="marca">Mini-LMS</span>
 <div>
 <Link className="nav-btn" to="/">Lista</Link>
 <Link className="nav-btn" to="/agregar">Agregar</Link>
 </div>
 </nav>
 <div className="contenedor">
 <Routes>
 <Route path="/" element={<Lista />} />
 <Route path="/agregar" element={<Agregar />} />
 </Routes>
 </div>
 </div>
 );
}
export default App;
