import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        //* showModal methos is a built-in dialog element
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='w-1/4 backdrop:bg-gray-900/90 p-4 rounded-xl'>
      {children}
      <form method='dialog' className='flex justify-end '>
        <button className='py-2 px-3 bg-gray-800 rounded-xl text-stone-50 hover:bg-gray-700'>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
