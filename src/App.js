import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './history/history';
import Home from './pages/home/index';
import Contact from './pages/contact_us/index';
import ReviewMessage from './pages/review_message/index';
import NotFound from './pages/notfound/index';
import NewsContent from './pages/news/index';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router history={history}>
                        <AnimatePresence>
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route exact path="/contact-us" component={Contact}></Route>
                                <Route exact path="/review-message" component={ReviewMessage}></Route>
                                <Route exact path="/news" component={NewsContent}></Route>
                                <Route exact path="*" component={NotFound}></Route>
                            </Switch>
                        </AnimatePresence>
                    </Router>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
