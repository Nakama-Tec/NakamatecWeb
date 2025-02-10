import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from './Pages/Home';
import ContactForm from './Pages/ContactForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
