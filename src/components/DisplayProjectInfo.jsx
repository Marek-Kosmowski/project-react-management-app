export default function DisplayProjectInfo({ inputData }) {
  const { projects } = inputData;
  // console.log(...projects)
  // const{title}
  // console.log(...projects);
  // projects.map(project=>{
  //   const{title, description, dueTo} = project;
  //   return (
  //    <h2>{title}</h2>
  //    <p>{projects}</p>
  //   )
  // })



  return (
    <div>
      <ul className='w-[36rem] mt-4 mb-2 flex justify-between'>
        <li>
          <h2 className='text-2xl font-bold text-gray-700'>Title</h2>
        </li>
        <li>
          <button className=' text-gray-600 hover:text-gray-900 '>
            Delete
          </button>
        </li>
      </ul>
      <div className='py-2 border-b-2 border-gray-300 '>
        <p className='mb-4 font-light text-gray-400'>DAte</p>
        <p className='mb-2 text-gray-600 font-medium '>Description</p>
      </div>
    </div>
  );
}
