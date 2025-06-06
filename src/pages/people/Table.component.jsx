import React from 'react';

const StatusBadge = ({ status }) => (
  <span className={`px-4 py-2.5 rounded-full text-xs font-[500] ${
    status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800'
  }`}>
    {status}
  </span>
);

const EmployeeTable = ({
  employees,
  selectedEmployees,
  onSelectEmployee,
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="overflow-x-auto border border-black/15 rounded-xl shadow-sm">
      <table className="w-full">
        <thead className="bg-[#F4F4F4]">
          <tr>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Job Title
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Salary
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Life Cycle
            </th>
            <th className="px-6 py-3 text-left text-sm font[500] text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 flex space-x-2.5 ">
                <input
                  type="checkbox"
                  checked={selectedEmployees.includes(employee.id)}
                  onChange={() => onSelectEmployee(employee.id)}
                  className="rounded border-gray-300"
                />
                <div>
                  <div className="text-[16px] font-semibold text-gray-900">
                    {employee.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {employee.email}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[16px] text-gray-900">
                {employee.jobTitle}
              </td>
              <td className="px-6 py-4 text-[16px] text-gray-900">
                {employee.department}
              </td>
              <td className="px-6 py-4 text-[16px] text-gray-900">
                ${employee.salary.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-[16px] text-gray-900">
                {employee.startDate}
              </td>
              <td className="px-6 py-4 text-[16px] text-gray-900">
                {employee.lifeCycle}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={employee.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EmployeeTable;