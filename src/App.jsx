import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import DefaultBackground from './components/DefaultBackground';
import DisplayProjectInfo from './components/DisplayProjectInfo';
import { useState } from 'react';

import Tasks from './components/Tasks';

function App() {
  const [newProject, setNewProject] = useState({
    projectId: undefined,
    projects: [],
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProjectBtn = (id) => {
    const selected = newProject.projects.find((project) => project.id === id);
    setSelectedProject(selected);
  };

  const handleNewProjectButton = () => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  const handleAddNewProject = (projectData) => {
    setNewProject((prevState) => {
      const newProjectData = {
        ...projectData,
        id: Math.floor(Math.random() * 1000),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProjectData],
      };
    });
  };

  let content;


  if (newProject.projectId === null && !selectedProject) {
    content = (
      <NewProject
        // onChange={handleNewProjectButton}
        // inputData={newProject}
        onAddProject={handleAddNewProject}
      />
    );
  } else if (newProject.projectId === undefined) {
    content = <DefaultBackground onStartAddProject={handleNewProjectButton} />;
  }

  return (
    <main className='h-screen my-8 flex gap-10'>
      <ProjectsSidebar
        onStartAddProject={handleNewProjectButton}
        inputData={newProject}
        onSelect={handleSelectProjectBtn}
      />
      {/* {!newProject ? (
        <DefaultBackground onChange={handleNewProjectButton} />
      ) : (
        <NewProject onChange={() => setNewProject(false)} />
      )} */}
      {content}
      {selectedProject && <DisplayProjectInfo onSelect={selectedProject} />}
    </main>
  );
}

export default App;
