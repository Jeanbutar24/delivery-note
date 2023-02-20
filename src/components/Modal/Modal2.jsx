import { createPortal } from 'react-dom';
import React from 'react';
const Modal2 = ({ children, isOpen, isClose, title }) => {
  if (!isOpen) {
    return null;
  }
  const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  };
  const documentByid = document.getElementById('portal');
  return createPortal(
    <div className='relative w-full'>
      <div style={overlay} onClick={() => isClose(false)} />
      <div className='modal-body fixed top-[50%] left-[50%] overflow-y-scroll max-w-max min-h-[300px] max-h-[70vh] md:max-h-max rounded-[10px] z-[1001] bg-[white] px-[30px] py-[15px]'>
        <div className='flex w-full justify-between'>
          <div>
            <p className='text-[22px] font-medium font-Roboto'>{title}</p>
            <div className='h-[3px] w-[70px] bg-gray-600' />
          </div>
          <button className='bg-blue-600 max-w-max  text-white px-2 rounded-md ' onClick={() => isClose(false)}>
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    documentByid
  );
};

export default Modal2;
