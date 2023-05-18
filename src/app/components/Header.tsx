import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-10 border-b-2">
      <h1 className="text-[40px] font-bold">JOBA</h1>
      <h1 className="text-[25px] underline">Help</h1>
    </header>
  );
};
