import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
//import ImgBackground  from './assets/background.png';
import Header from './components/Header';

function App() {
    const [ projects, setProjects ] = useState([]);

    useEffect(()=>{
        api.get('projects').then(response =>{
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        //projects.push(`React Native ${Date.now()}`);
        //setProjects([...projects, `React Native ${Date.now()}`])

        const response = await api.post('projects', {
            title: `React Native ${Date.now()}`,
            owner: "Jean S. de S."
        } );

        const project = response.data;

        setProjects([...projects, project]);
    }

    return(
        <>
        <Header  title="Projects"/>
        <ul>
            {projects.map(project=> <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;