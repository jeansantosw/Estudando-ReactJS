import React, { useState } from 'react';
import './App.css';
import ImgBackground  from './assets/background.png';
import Header from './components/Header';

function App() {
    const [ projects, setProjects ] = useState(['Reactjs', 'NodeJS']);

    function handleAddProject(){

        //projects.push(`React Native ${Date.now()}`);
        setProjects([...projects, `React Native ${Date.now()}`]);
    }

    return(
        <>
        <Header  title="Projects"/>

        <img width={ 400 } src={ ImgBackground }/>
        <ul>
            {projects.map(project=> <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;