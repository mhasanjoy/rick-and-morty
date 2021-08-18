import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Fallback from './components/common/Fallback/Fallback';
import Navbar from "./components/common/Navbar/Navbar";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Location = React.lazy(() => import('./pages/Location/Location'));
const Episode = React.lazy(() => import('./pages/Episode/Episode'));
const NoMatch = React.lazy(() => import('./pages/NoMatch/NoMatch'));

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<Fallback />}>
                <Switch>
                    <Route path="/characters" component={Home} />
                    <Route path="/locations" component={Location} />
                    <Route path="/episodes" component={Episode} />
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;