import { useState } from 'react';
import { useRef } from 'react';
import Modal from './Modal';
export default function NewTask({ onCreate }) {
  const [inputTask, setInpuTask] = useState('');

  const modal = useRef();
  const newInputTask = useRef();
  const handleChange = (e) => {
    setInpuTask(e.target.value);
  };

  const handleClickBtn = () => {
    const enteredInputTask = newInputTask.current.value;
    setInpuTask('');

    if (enteredInputTask.trim() === '') {
      modal.current.open();
      return;
    }

    onCreate({
      task: inputTask,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className='mb-2  font-bold text-xl text-gray-700'>Invalid input</h2>
        <p className='mb-3'>Please provide a value for a task input!</p>
      </Modal>
      <div className='flex gap-4 mb-6'>
        <input
          ref={newInputTask}
          onChange={handleChange}
          className='w-60 bg-gray-200 py-1 px-2 rounded focus:outline-none'
          type='text'
          value={inputTask}
        />
        <button onClick={handleClickBtn} className='font-medium text-gray-700'>
          Add Task
        </button>
      </div>
    </>
  );
}
