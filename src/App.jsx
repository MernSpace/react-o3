import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import TeamPage from "./Pages/TeamPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import TestimonialPage from "./Pages/TestimonialPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/team" element={<TeamPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/project" element={<ProjectPage/>}/>
                <Route path="/testimonial" element={<TestimonialPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;