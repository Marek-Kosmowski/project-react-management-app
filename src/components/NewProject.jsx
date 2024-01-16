import Input from './Input';

export default function NewProject() {
  return (
    <div className='w-[32rem] mt-16'>
      <menu className='flex justify-end	items-center gap-6'>
        <li>
          <button className='px-5 py-2 text-gray-600 hover:text-gray-900'>Cancel</button>{' '}
        </li>
        <li>
          <button className='px-5 py-2 bg-gray-800 rounded-lg text-stone-50 hover:bg-gray-700'>Save</button>{' '}
        </li>
      </menu>
      <div>
        <Input label='Title' type='text' />
        <Input label='Description' textarea />
        <Input label='Due To' type='date' />
      </div>
    </div>
  );
}
