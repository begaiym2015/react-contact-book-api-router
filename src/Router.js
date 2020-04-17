import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ContactBook from './conponents/ContactBook/ContactBook';
import NavBar from './conponents/NavBar/NavBar';


const Router = () => {
        return (
            <BrowserRouter>
            <NavBar />

            <Route path="/" exact component={() => <ContactBook page="LIST" /> } />
            <Route path="/add" component={() => <ContactBook page="ADD" /> } /> 
            <Route path="/edit" component={() => <ContactBook page="EDIT" /> } /> 
            </BrowserRouter>
        );
    
}

export default Router;