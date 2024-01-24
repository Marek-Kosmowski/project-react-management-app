import { useRef } from 'react';

export default function NewTask({ onCreate }) {
  const inputRef = useRef();

  const createNewTask = () => {
    let enteredInputTask = inputRef.current.value;
    onCreate({
      task: enteredInputTask,
    });
  };

  return (
    <div className='flex gap-4 mb-6'>
      <input
        ref={inputRef}
        className='w-60 bg-gray-200 py-1 px-2 rounded focus:outline-none'
        type='text'
      />
      <button onClick={createNewTask} className='font-medium text-gray-700'>
        Add Task
      </button>
    </div>
  );
}
