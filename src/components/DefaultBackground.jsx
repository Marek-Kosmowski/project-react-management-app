import NoProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function DefaultBackground({ onStartAddProject }) {
  return (
    <div className='w-2/3 text-center mt-28'>
      <img
        className='w-24 h-24 w object-contain mx-auto'
        src={NoProjectImage}
        alt=''
      />
      <h2 className='my-6 font-bold text-xl text-gray-700'>
        No Project Selected
      </h2>
      <p className='mb-4 text-gray-500'>Select a project or add a new one.</p>
      <p className='mt-6'>
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
