import { AnimatePresence } from 'framer-motion';
import { Routes as Switch, Route, useLocation } from 'react-router-dom'

import Home from "./routes/home.route";
import Title from './components/title.component'
import Play from './routes/play.route';

const App = () => {
    const location = useLocation();
    return (
        <>
            <Title />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/play'} element={<Play />} />
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;
