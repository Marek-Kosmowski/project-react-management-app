import Input from './Input';
import Button from './Button';

export default function NewProject({ onChange }) {
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
          <Button>Save</Button>
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
