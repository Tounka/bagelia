
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { PaginaPrincipal } from './Paginas/PaginaPrincipal/PaginaPrincipal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PaginaPrincipal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
