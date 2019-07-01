import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import Footer from 'components/footer/footer';
import Home from 'components/home/homeview';

import ErrorBoundary from 'components/errorboundary/errorboundary';
import './app.css';
const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
                {useMemo(() => <Footer></Footer>, [])}
            </BrowserRouter>
        </ErrorBoundary>
    );
};
export default App;