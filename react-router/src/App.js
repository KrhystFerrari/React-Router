import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

// components
import Navbar from './components/Navbar';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota Dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested Routes */}
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
