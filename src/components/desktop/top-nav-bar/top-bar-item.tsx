import React from 'react';

interface TopBarItemProps {
  Icon?: React.ReactNode;
  children?: JSX.Element;
  handleItemIcon?: (value: boolean) => void;
  value?: boolean;
}

export const TopBarItem = ({ Icon, handleItemIcon = () => {}, value = false }: TopBarItemProps) => {
  return (
    <div
      className="rounded hover:bg-white hover:bg-opacity-10 px-2 h-full flex items-center transition duration-300 ease-in-out"
      onClick={() => handleItemIcon(!value)}
    >
      <div className="w-[25px]">{Icon}</div>
    </div>
  );
};
