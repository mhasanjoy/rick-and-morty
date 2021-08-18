import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Fallback from './components/common/Fallback/Fallback';
import Navbar from "./components/common/Navbar/Navbar";
const Home = React.lazy(() => import('./pages/Home/Home'));

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<Fallback />}>
                <Switch>
                    <Route path="/characters" component={Home} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default AppRouter;