import { forwardRef, useRef } from 'react';

const Input = forwardRef(function ({ label, textarea, ...props }, ref) {
  const inputRefTitle = useRef();

  const classInput =
    'w-full p-1 border-b-2 border-gray-700 bg-gray-200 rounded focus:outline-none';

  return (
    <p className='flex flex-col gap-2 my-4'>
      <label
        ref={inputRefTitle}
        className='text-lg uppercase font-roboto font-bold text-gray-700'
      >
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classInput} {...props}></textarea>
      ) : (
        <input ref={ref} className={classInput} {...props} />
      )}
    </p>
  );
});

export default Input;
