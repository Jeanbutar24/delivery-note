import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Container = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <div className=''>{children}</div>
      </div>
    </div>
  );
};

export default Container;
