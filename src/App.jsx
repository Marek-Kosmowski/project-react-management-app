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
    tasks: [],
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
console.log(selectedProject)
  // const handleNewTaskBtn = (taskData) => {
  //   setNewTasks((prevState) => {
  //     const newTaskData = {
  //       ...taskData,
  //       id: Math.floor(Math.random() * 1000),
  //     };
  //     return {
  //       ...prevState,
  //       tasks: [...prevState.tasks, newTaskData],
  //     };
  //   });
  // };

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
      {selectedProject && (
        <DisplayProjectInfo
          onSelect={selectedProject}
          addTask={handleAddTask}
          removeTask={handleRemoveTask}
          projectData = {newProject}
        />
      )}
    </main>
  );
}

export default App;
