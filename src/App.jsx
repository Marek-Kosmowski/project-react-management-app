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

  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProjectBtn = (id) => {
    const selected = newProject.projects.find((project) => project.id === id);
    setSelectedProject(selected);
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  };

  const handleNewProjectButton = () => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
    setSelectedProject(null);
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

  const handleCancelButton = () => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
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
    setSelectedProject(undefined);
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
    content = (
      <NewProject
        onAddProject={handleAddNewProject}
        onCancel={handleCancelButton}
      />
    );
  } else if (newProject.projectId === undefined && !selectedProject) {
    content = <DefaultBackground onStartAddProject={handleNewProjectButton} />;
  }
  return (
    <main className='h-screen my-8 flex gap-10'>
      <ProjectsSidebar
        onStartAddProject={handleNewProjectButton}
        inputData={newProject}
        onSelect={handleSelectProjectBtn}
      />

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
