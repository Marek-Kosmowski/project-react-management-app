export default function ProjectsSidebar() {
  return (
    <aside className='w-1/3  bg-gray-800 py-16 px-10 text-stone-50 md:w-72 rounded-r-xl '>
      <h2 className='mb-8 font-bold uppercase font-roboto md:text-2xl'>
        Your Projects
      </h2>
      <div>
        <button className='py-2 px-4 bg-gray-600 rounded-xl text-gray-300 hover:bg-gray-500 hover:text-gray-800 md:py-1 md:px-2 text-xs md:text-base  hover:scale-110 ease-in duration-300'>
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
