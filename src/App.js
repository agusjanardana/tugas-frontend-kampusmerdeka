import logo from './logo.svg';
import './App.css';
// import Content from './Components/Content';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import AboutApp from './Components/About/AboutApp';
import AboutAuthor from './Components/About/AboutAuthor';
import Form from './Components/Form/Content'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    // <Content></Content>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="*" element={< NotFound />}></Route>
        <Route path="/about" element={< AboutApp />}></Route>
        <Route path="/about/about-app" element={< AboutApp />}></Route>
        <Route path="/about/about-author" element={< AboutAuthor />}></Route>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
