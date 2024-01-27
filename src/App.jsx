import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import DefaultBackground from './components/DefaultBackground';
import DisplayProjectInfo from './components/DisplayProjectInfo';
import { useState } from 'react';

function App() {
  const [newProject, setNewProject] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });

  console.log(newProject);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProjectBtn = (id) => {
    const selected = newProject.projects.find((project) => project.id === id);
    setSelectedProject(selected);
    // setNewProject(proj)
  };

  const handleNewProjectButton = () => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  const selectedProjectTasks = newProject.tasks.filter(
    (task) => task.projectId === selectedProject.id
  );

  const handleAddTask = (taskData) => {
    setNewProject((prevState) => {
      const newTaskData = {
        ...taskData,
        projectId: selectedProject.id,
        id: Math.floor(Math.random() * 1000),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTaskData],
      };
    });
  };
  const handleRemoveTask = (id) => {
    setNewProject((prevState) => {
      return {
        ...prevState,

        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleAddNewProject = (projectData) => {
    setNewProject((prevState) => {
      const newProjectData = {
        ...projectData,
        id: Math.floor(Math.random() * 1000),
        tasks: [],
      };
      return {
        ...prevState,
        projectId: undefined,
        projects: [...prevState.projects, newProjectData],
      };
    });
    setSelectedProject(null);
  };

  const handleRemoveProject = () => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== selectedProject.id
        ),
      };
    });
    setSelectedProject(null);
  };

  let content;

  if (newProject.projectId === null && !selectedProject) {
    content = <NewProject onAddProject={handleAddNewProject} />;
  } else if (newProject.projectId === undefined && !selectedProject) {
    content = <DefaultBackground onStartAddProject={handleNewProjectButton} />;
  }
  // console.log(newProject);
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
      {selectedProject && (
        <DisplayProjectInfo
          onSelect={selectedProject}
          addTask={handleAddTask}
          removeTask={handleRemoveTask}
          projectData={newProject}
          tasks={selectedProjectTasks}
          removeProject={handleRemoveProject}
        />
      )}
    </main>
  );
}

export default App;
