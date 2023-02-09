import { Icon } from '@iconify/react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='h-[90px] w-full '>
      <div className='flex items-center justify-between h-full px-4'>
        <p className='text-[36px] font-[600] text-[#393838] font-Roboto tracking-[2px] ml-[12px]'>Delivery Note</p>
        <div className='flex gap-2 mr-[11px] items-center'>
          <div className='rounded-[50%] h-[47px] w-[45px] overflow-hidden mr-2 border-2 border-[#ffffff]'>
            <Image
              className='object-cover'
              height={35}
              width={48}
              alt=''
              src={
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkxODYzOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              }
            />
          </div>
          <p className='text-[19px] font-Lato font-normal text-[#161515] mr-2'>Jessica</p>
          <div>
            <Icon icon='material-symbols:keyboard-arrow-down-rounded' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
