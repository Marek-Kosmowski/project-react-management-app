import Tasks from './Tasks';
export default function DisplayProjectInfo({ onSelect, addTask, projectData, removeTask }) {
  const { title, description, dueTo, id } = onSelect;
  // console.log(onSelect);
  return (
    <div>
      <ul className='w-[36rem] mt-4 mb-2 flex justify-between'>
        <li>
          <h2 className='text-2xl font-bold text-gray-700'>{title}</h2>
        </li>
        <li>
          <button className=' text-gray-600 hover:text-gray-900 '>
            Delete
          </button>
        </li>
      </ul>
      <div className='py-2 border-b-2 border-gray-300 '>
        <p className='mb-4 font-light text-gray-400'>{dueTo}</p>
        <p className='mb-2 text-gray-600 font-medium '>{description}</p>
      </div>
      {<Tasks projectId={id}  addNewTask={addTask} projectData = {projectData} removeTask={removeTask}/>}
    </div>
  );
}
