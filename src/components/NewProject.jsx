import { useRef } from 'react';

import Input from './Input';
import Button from './Button';

export default function NewProject({ onChange, inputData, onAddProject }) {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueTo = useRef();

  const saveNewProjectButton = () => {
    // inputData.projects.push({
    //   id: Math.floor(Math.random() * 1000),
    //   title: inputTitle.current.value,
    //   description: inputDescription.current.value,
    //   dueTo: inputDueTo.current.value,
    // });
    // onChange();


    const enteredInputTitle = inputTitle.current.value;
    const enteredInputDescription = inputDescription.current.value;
    const enteredInputDueTo = inputDueTo.current.value;
    
    onAddProject({
      title: enteredInputTitle,
      description: enteredInputDescription,
      dueTo: enteredInputDueTo,
    });
  };

  return (
    <div className='w-[32rem] mt-16'>
      <menu className='flex justify-end	items-center gap-6'>
        <li>
          <button className='px-5 py-2 text-gray-600 hover:text-gray-900'>
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={saveNewProjectButton}>Save</Button>
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
