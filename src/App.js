import React from 'react';
import Header from './components/Header';

function App() {
    return(
        <>
        <Header  title="HomePage">

            <ul>
                <li>ReactJS</li>
                <li>NodeJS</li>
            </ul>
            
        </Header>,

        <Header  title="Projects">

            <ul>
                <li>React Native</li>
            </ul>
        </Header>
        </>
    );
}

export default App;