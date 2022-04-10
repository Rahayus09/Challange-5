import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hasil from './pages/Hasil/Hasil';
import Details from './pages/PageDetails/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Hasil />} />
        <Route path="/detail" element={<Details />} />
    </Routes>
    </BrowserRouter>


  ); 
}
export default App;