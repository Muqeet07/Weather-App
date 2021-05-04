import React from 'react';
import Header from './Header';
import MainContent from './MainContent'
import Footer from './Footer';
import Weather from './Weather';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AboutPage from './AboutPage';

function MyApp4(){
    
    return (
       <div className="appcontainer">
           <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainContent />
                    </Route>
                    <Route exact path="/weather">
                        <Weather />
                    </Route>
                    <Route path="/weather/:names">
                        <Weather />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                </Switch>
                <Footer />
           </Router>
       </div>
    )
}

export default MyApp4;