import { Icon } from '@iconify/react';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div className='bg-[#175050] min-w-[77px] max-w-[77px] text-white min-h-screen z-[999]'>
      <div className='flex justify-center'>
        <div className='h-[90px] flex items-center'>
          <div className='w-[61px] h-[46px] bg-[#483E83] rounded-[30px] flex justify-center items-center'>
            <p className='text-[27px] font-bold'>L</p>
          </div>
        </div>
      </div>
      <div
        className={`flex ${!hover && 'justify-center'} cursor-pointer   items-center mt-16 ${hover && 'min-w-[234px] max-h-[56px] ml-[10px]'} `}
        onMouseEnter={() => {
          !hover && setHover(true);
        }}
        onMouseLeave={() => {
          hover && setHover(false);
        }}
      >
        <Icon
          icon='mdi:truck'
          width={38}
          onClick={() => (!active ? setActive(true) : setActive(false))}
          height={30}
          className={` ${active && 'shadow-r'} rounded-[10px] ${hover && 'bg-[#408484] w-[49px] h-[41px] '}`}
        />
        {hover && <p className='text-[#fefefe] text-[18px] ml-[12px] rounded-[7px] p-[6px] font-medium  bg-[#145252]'>Delivery Note</p>}
      </div>
    </div>
  );
};

export default Sidebar;
