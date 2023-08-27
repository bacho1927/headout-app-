import './App.css';
import Mainpageslides from './components/Mainpageslides';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout';
import MainPageSlides from './components/Mainpageslides';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Mainpageslides />} />
            <Route path="new-york" element={<h1>rsadasd</h1>} />
            <Route path="*" element={<MainPageSlides />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
