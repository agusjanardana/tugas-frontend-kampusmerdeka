import logo from './logo.svg';
import './App.css';
// import Content from './Components/Content';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import AboutApp from './Components/About/AboutApp';
import AboutAuthor from './Components/About/AboutAuthor';
import Form from './Components/Form/Content';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/store"

function App() {
    return (
        // <Content></Content>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/about" element={<AboutApp />}></Route>
                <Route path="/about/about-app" element={<AboutApp />}></Route>
                <Route path="/about/about-author" element={<AboutAuthor />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
}

export default App;
