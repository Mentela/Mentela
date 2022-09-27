import './App.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Calculadora from './pages/Calculadora';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';



function App() {

  return (
    <div className='App'>
      <div className='contenedor'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Nav />}>
              <Route index element={<Home />} />
              <Route path='aboutme' element={<AboutMe />} />
              <Route path='projects' element={<Projects />} />  
              <Route path="*" element={<NotFound />} />
              <Route path="calculadora" element={<Calculadora />} />
            </Route>      
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

/*  https://console.firebase.google.com/project/lorenzomentesana1/overview  */