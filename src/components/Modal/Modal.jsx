const Modal = ({ open, children, onClose, title }) => {
  const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  };
  if (!open) return null;
  return (
    <>
      <div style={overlay} onClick={onClose} />
      <div className='w-full'>
        <div className=' bg-white overflow-scroll  p-3  z-[1000] fixed top-[0%] md:top-[6%]  flex flex-col rounded-[10px] right-[50%] translate-x-1/2 '>
          <div className='flex justify-between'>
            <div>
              <p className='text-[22px] font-medium font-Roboto'>{title}</p>
              <div className='h-[3px] w-[70px] bg-gray-600' />
            </div>
            <button className='bg-blue-600 max-w-max  text-white px-2 rounded-md ' onClick={onClose}>
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
