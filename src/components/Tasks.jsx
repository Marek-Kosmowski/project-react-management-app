import NewTask from './NewTask';
export default function Tasks({ addNewTask, removeTask, tasks }) {
  return (
    <section className='mt-6'>
      <h2 className='w-[36rem] mb-4 text-2xl font-bold text-gray-700'>Tasks</h2>
      <NewTask onCreate={addNewTask} />
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
                  onClick={() => removeTask(task.id)}
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
