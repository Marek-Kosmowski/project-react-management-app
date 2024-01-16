export default function Input({ label, textarea, ...props }) {
  const classInput =
    'w-full p-1 border-b-2 border-gray-700 bg-gray-200 rounded focus:outline-none';
  return (
    <p className='flex flex-col gap-2 my-4'>
      <label className='text-lg uppercase font-roboto font-bold text-gray-700'>
        {label}
      </label>
      {textarea ? (
        <textarea className={classInput} {...props}></textarea>
      ) : (
        <input className={classInput} {...props} />
      )}
    </p>
  );
}
