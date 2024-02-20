import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import HomePage from '../pages/Home';
import CVPage from '../pages/CV';
import ProjectsPage from '../pages/Projects';
// import TubePage from '../pages/Tube';
// import BlogsPage from '../pages/Blogs';
// import CovidPage from '../pages/CovidTracker';
import LandingPage from '../pages/Landing';
// import HTMLImportWrapper from '../blogs/HTMLImportWrapper';
// import TestMDImport from './blogs/markdown-test/MDImport'; // Static Markdown (Test)
// import MDImportWrapper from './MDImportWrapper'; // Markdown from MongoDB
import AnimatePage from './AnimatePage';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/cv" element={<AnimatePage page={<CVPage />} />} />
                <Route path="/projects" element={<AnimatePage page={<ProjectsPage/>} />} />
                {/* <Route path="/blogs/mogodB/:title/:_id" element={<AnimatePage page={<MDImportWrapper url={location.pathname} />} />} />
                <Route path="/blogs/static/:post/:title" element={<AnimatePage page={<HTMLImportWrapper url={location.pathname} />} />} />
                <Route path="/blogs" element={<AnimatePage page={<BlogsPage blogdata={blogdata} />} />} />
                <Route path="/covid" element={<AnimatePage page={<CovidPage coviddata={coviddata} />} />} />
                <Route path="/travel" element={<AnimatePage page={<TubePage stationdata={stationdata} />} />} /> */}
                <Route path="/landing" element={<AnimatePage page={<LandingPage />} />} />

                {/* Home page goes last */}
                <Route path="/" element={<AnimatePage page={<HomePage />} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;