import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import DefaultBackground from './components/DefaultBackground';
import { useState } from 'react';

function App() {
  const [newProject, setNewProject] = useState(false);

  const handleProjectButton = () => {
    setNewProject(true);
  };

  return (
    <main className='h-screen my-8 flex gap-10'>
      <ProjectsSidebar onChange={handleProjectButton} />

      {!newProject ? (
        <DefaultBackground onChange={handleProjectButton} />
      ) : (
        <NewProject onChange={() => setNewProject(false)} />
      )}
    </main>
  );
}

export default App;
