export default function Button({ children, ...props }) {
  return (
    <button
      className='px-5 py-2 bg-gray-800 rounded-lg text-stone-50 hover:bg-gray-700'
      {...props}
    >
      {children}
    </button>
  );
}
