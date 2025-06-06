import React from 'react';

const StatusBadge = ({ status }) => {
  const baseClass = 'px-4 py-2 rounded-full text-sm font-medium';
  
  const statusClasses = {
    Paid: `bg-green-100 text-green-600 ${baseClass}`,
    Pending: `bg-[#F3F3F3] text-[#C0C0C0] ${baseClass}`,
  };

  return <span className={statusClasses[status]}>{status}</span>;
};

const TableRow = ({ employee, setSelectedEmployee }) => (
  <tr className="border-b border-[#D6D6D6] cursor-pointer" onClick={() => setSelectedEmployee(employee)}>
    <td className="px-4 py-3 max-w-[200px] break-words">
      <div>
        <div className="font-medium text-gray-900 text-md">{employee.name}</div>
        <div className="text-xs text-gray-500">{employee.email}</div>
      </div>
    </td>
    <td className="px-4 py-3 text-sm text-gray-700 break-words">{employee.jobTitle}</td>
    <td className="px-4 py-3 text-sm text-gray-700 break-words">{employee.department}</td>
    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
      ${employee.netSalary.toLocaleString()}
    </td>
    <td className="px-4 py-3">
      <StatusBadge status={employee.status} />
    </td>
  </tr>
);

export default TableRow;