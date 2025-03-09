import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from './Pages/Home';
import ContactForm from './Pages/ContactForm';
import { CONTACT, HOME } from './router/router';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={CONTACT} element={<ContactForm/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
