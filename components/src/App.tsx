import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./site/Header";
import Body from './site/Body';
import Footer from './site/Footer';


function App() {
    return (
        <>
            <Header title={'New body'}/>
            <Body titleForBody ={'New body'}/>
            <Footer titleForFooter ={'New body'} />
        </>
    );
}

export default App;
