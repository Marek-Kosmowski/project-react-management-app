import { useRef } from 'react';

import Input from './Input';
import Button from './Button';

export default function NewProject({ onChange, inputData }) {
  let { projectId } = inputData;

  const createNewProjectButton = () => {
    projectId += 1;
    inputData.projects.push({
      title: inputTitle.current.value,
      description: inputDescription.current.value,
      dueTo: inputDueTo.current.value,
    });
    onChange();
  };

  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueTo = useRef();

  return (
    <div className='w-[32rem] mt-16'>
      <menu className='flex justify-end	items-center gap-6'>
        <li>
          <button
            onClick={onChange}
            className='px-5 py-2 text-gray-600 hover:text-gray-900'
          >
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={createNewProjectButton}>Save</Button>
        </li>
      </menu>
      <div>
        <Input ref={inputTitle} label='Title' type='text' id='title' />
        <Input
          ref={inputDescription}
          label='Description'
          id='description'
          textarea
        />
        <Input ref={inputDueTo} label='Due To' type='date' id='dueTo' />
      </div>
    </div>
  );
}
