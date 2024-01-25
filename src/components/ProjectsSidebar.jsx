import { useState } from 'react';
import Button from './Button';
import DisplayProjectInfo from './DisplayProjectInfo';
export default function ProjectsSidebar({
  onStartAddProject,
  inputData,
  onSelect,
}) {
  const { projects } = inputData;
console.log(inputData)
  return (
    <aside className='w-1/3  bg-gray-800 py-16 px-10 text-stone-50 md:w-72 rounded-r-xl '>
      <h2 className='mb-8 font-bold uppercase font-roboto md:text-2xl'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          const { id } = project;
          return (
            <div key={id} className='flex justify-start'>
              <li
                className='mt-1 mb-1 cursor-pointer py-2 px-3 font-medium hover:border-b-4 hover:border-gray-600 hover:text-gray-400 hover:font-bold'
                onClick={() => onSelect(id)}
              >
                {project.title}
              </li>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}
