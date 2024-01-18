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

  let content;

  console.log(newProject.projectId);

  if (newProject.projectId === null) {
    content = <NewProject />;
  } else if (newProject.projectId === undefined) {
    content = <DefaultBackground onChange={handleNewProjectButton} />;
  }

  return (
    <main className='h-screen my-8 flex gap-10'>
      <ProjectsSidebar onChange={handleNewProjectButton} />

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
