import { useRef } from 'react';

import Input from './Input';
import Button from './Button';
import Modal from './Modal';

export default function NewProject({
  onChange,
  inputData,
  onAddProject,
  onCancel,
}) {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDueTo = useRef();
  const modal = useRef();
  const saveNewProjectButton = () => {
    const enteredInputTitle = inputTitle.current.value;
    const enteredInputDescription = inputDescription.current.value;
    const enteredInputDueTo = inputDueTo.current.value;

    if (
      enteredInputTitle.trim() === '' ||
      enteredInputDescription.trim() === '' ||
      enteredInputDueTo.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredInputTitle,
      description: enteredInputDescription,
      dueTo: enteredInputDueTo,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className='mb-2  font-bold text-xl text-gray-700'>Invalid input</h2>
        <div className='mb-3 flex flex-col items-start gap-1 '>
          <p>You forgot to enter the value!</p>
          <p>Please provide a value for every input</p>
        </div>
      </Modal>
      <div className='w-[32rem] mt-16'>
        <menu className='flex justify-end	items-center gap-6'>
          <li>
            <button
              onClick={onCancel}
              className='px-5 py-2 text-gray-600 hover:text-gray-900'
            >
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
    </>
  );
}
