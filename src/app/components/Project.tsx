import React, { useMemo } from 'react';
import { Status } from '../types';

interface Props {
  name: string;
  total: string;
  status: Status;
  description: string;
}

export const Project: React.FC<Props> = ({
  name,
  total,
  status,
  description,
}) => {
  const renderStatusColor = useMemo(() => {
    switch (status) {
      case 'complete':
        return 'bg-[green]';
      case 'dispute':
        return 'bg-[#ccc]';
      case 'rejected':
        return 'bg-[red]';
      case 'in progress':
        return 'bg-[#f8f8f8]';
      case 'pending':
        return 'bg-[#f8f8]';
      default:
        return 'bg-[green]';
    }
  }, [status]);
  return (
    <div className="mt-[20px]">
      <h3 className="text-[25px]">Projects: {name}</h3>
      <div className="bg-[#f8f8f8] p-5 flex items-center justify-between">
        <div>
          <div>Total earning: {total}</div>
          <div className="">Description: {description}</div>
        </div>
        <span
          className={`flex cursor-pointer items-center justify-center min-w-[120px] p-5 ${renderStatusColor}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
