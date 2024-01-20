import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import DefaultBackground from './components/DefaultBackground';
import { useState } from 'react';

function App() {
  const [newProject, setNewProject] = useState({
    projectId: undefined,
    projects: [],
  });

  const handleNewProjectButton = (inputIdentifier, newValue) => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  let content;

  console.log(newProject);

  if (newProject.projectId === null) {
    content = (
      <NewProject onChange={handleNewProjectButton} inputData={newProject} />
    );
  } else if (newProject.projectId === undefined) {
    content = <DefaultBackground onChange={handleNewProjectButton} />;
  }

  return (
    <main className='h-screen my-8 flex gap-10'>
      <ProjectsSidebar
        onChange={handleNewProjectButton}
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
