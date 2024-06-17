
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { PaginaPrincipal } from './Paginas/PaginaPrincipal/PaginaPrincipal';
import { PaginaCatalogo } from './Paginas/PaginaCatalogo/PaginaCatalogo';
import { PaginaContacto } from './Paginas/PaginaContacto/PaginaContacto';
import { PaginaAdmi } from './Paginas/PaginaAdmin/PaginaAdmi';
import { PaginaLogin } from './Paginas/PaginaAdmin/PaginaLogin';


import { PaginaProvider } from "./Paginas/PaginaAdmin/Contexto"; // Import context
function App() {
  return (
    <PaginaProvider>
            <div className="App">
                <BrowserRouter>
                  <Routes>
                    <Route index element={<PaginaPrincipal />} />
                    <Route path='Catalogo' element={<PaginaCatalogo />} />
                    <Route path='Contacto' element={<PaginaContacto />} />
                    
                    <Route path='Administrador' element={<PaginaAdmi />} />
                    <Route path='Login' element={<PaginaLogin />} />
            
                  </Routes>
                </BrowserRouter>
            </div>
    </PaginaProvider>

  );
}

export default App;
