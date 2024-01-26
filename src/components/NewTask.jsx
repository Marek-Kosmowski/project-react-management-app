import { useState } from 'react';

export default function NewTask({ onCreate }) {
  const [inputTask, setInpuTask] = useState('');

  const handleChange = (e) => {
    setInpuTask(e.target.value);
  };

  const handleClickBtn = () => {
    setInpuTask('');

    onCreate({
      task: inputTask,
    });
  };


  return (
    <div className='flex gap-4 mb-6'>
      <input
        onChange={handleChange}
        className='w-60 bg-gray-200 py-1 px-2 rounded focus:outline-none'
        type='text'
        value={inputTask}
      />
      <button onClick={handleClickBtn} className='font-medium text-gray-700'>
        Add Task
      </button>
    </div>
  );
}
