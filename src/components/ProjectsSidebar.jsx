import Button from './Button';

export default function ProjectsSidebar({ onChange }) {
  return (
    <aside className='w-1/3  bg-gray-800 py-16 px-10 text-stone-50 md:w-72 rounded-r-xl '>
      <h2 className='mb-8 font-bold uppercase font-roboto md:text-2xl'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onChange}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
