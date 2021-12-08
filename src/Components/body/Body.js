import React from 'react';
import './body.css';
import About from './about/About';
import Projects from './project/Projects';
import Skills from './skills/Skills';
import Work from './work/Work';
import Admin from './admin/Admin';

import Contact from './contact/Contact'
import { Route, Routes } from 'react-router-dom';



function Body() {
    return (
        <div className="body">


            <Routes>
                <Route exact path="/" 
                element={ <About />}>
                </Route>
                
                <Route exact path="/project" 
                element={ <Projects />}>
                </Route>

                <Route exact path="/skills" 
                element={ <Skills />}>
                </Route>

                <Route exact path="/work" 
                element={ <Work />}>
                </Route>

                <Route exact path="/contact" 
                element={ <Contact />}>
                </Route>

                <Route exact path="/admin"
                    element={<Admin />}>
                </Route>


            </Routes>
        </div>
        /* <section id='about'>
        <About/>
    </section>
    <section id='Projects'>
        <Projects/>
    </section>
    <section id='Skills'>
        <Skills/>
    </section>
    <section id='Work'>
        <Work/>
    </section>
    <section id='Contact'>
        <Contact/>
    </section>  */

    )
}

export default Body
