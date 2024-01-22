import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import DefaultBackground from './components/DefaultBackground';
import { useState } from 'react';

function App() {
  const [newProject, setNewProject] = useState({
    projectId: undefined,
    projects: [],
  });

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

  console.log(newProject);

  if (newProject.projectId === null) {
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
      />

      {/* {!newProject ? (
        <DefaultBackground onChange={handleNewProjectButton} />
      ) : (
        <NewProject onChange={() => setNewProject(false)} />
      )} */}
      {content}
    </main>
  );
}

export default App;
