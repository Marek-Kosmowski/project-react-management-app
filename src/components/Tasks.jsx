import NewTask from './NewTask';
import { useState } from 'react';
export default function Tasks() {
  const [newTasks, setNewTasks] = useState({
    taskId: null,
    tasks: [],
  });
  const [selectedTask, setSelectedTask] = useState(null);
  const handleSelectTask = (id) => {
    const selected = newTasks.tasks.find((task) => task.id === id);
    setSelectedTask(selected);
  };

  const { tasks } = newTasks;
  const handleNewTaskBtn = (taskData) => {
    setNewTasks((prevState) => {
      const newTaskData = {
        ...taskData,
        id: Math.floor(Math.random() * 1000),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTaskData],
      };
    });
  };

  const handleRemoveTask = (id) => {
    setNewTasks((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  return (
    <section className='mt-6'>
      <h2 className='w-[36rem] mb-4 text-2xl font-bold text-gray-700'>Tasks</h2>
      <NewTask onCreate={handleNewTaskBtn} />
      {tasks.length === 0 && (
        <p className='text-base'>This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className='p-4 bg-gray-300 rounded'>
          {tasks.map((task) => {
            return (
              <li key={task.id} className='flex justify-between'>
                <span>{task.task}</span>
                <button
                  onClick={()=>handleRemoveTask(task.id)}
                  className='font-medium text-gray-700 hover:text-red-700'
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
