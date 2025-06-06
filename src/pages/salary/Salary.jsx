import React, { useMemo, useState } from "react";
import Components from "../../shared/components/export";
import DateDropdown from "./DateInput.component";
import { ChevronDown, Filter, Search } from "lucide-react";
import TableRow from "./TableRow.component";
import ProfileCard from "./ProfileCard.component";
import { mockEmployees, STATUS_FILTER_OPTIONS } from "../../utils/const/salary.constants";

const Salary = () => {
  const [selectedMonth, setSelectedMonth] = useState("May 2025");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(mockEmployees[1]);

  const filteredEmployees = useMemo(() => {
    return mockEmployees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = !filterStatus || employee.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus]);

  return (
    <>
      <Components.navbar />

      <section className="my-10 mx-2 lg:mx-6">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Salary Activities
          </h1>

          <DateDropdown
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-10">
          <div className="w-full lg:w-[75%] flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="relative w-full sm:w-[60%]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-black/15 rounded-xl shadow-sm text-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="relative w-full max-w-xs sm:max-w-sm">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="appearance-none w-full border border-black/15 rounded-xl shadow-sm pl-10 pr-8 py-2.5 text-md focus:outline-none focus:ring-1 focus:ring-blue-500 truncate"
                >
                  {STATUS_FILTER_OPTIONS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="overflow-x-auto border border-black/15 rounded-xl shadow-sm">
              <table className="w-full">
                <thead className="bg-[#F4F4F4]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#3A3A3A] uppercase">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#3A3A3A] uppercase">
                      Job Title
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#3A3A3A] uppercase">
                      Department
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#3A3A3A] uppercase">
                      Net Salary
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-[#3A3A3A] uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredEmployees.map((employee) => (
                    <TableRow
                      key={employee.id}
                      employee={employee}
                      setSelectedEmployee={setSelectedEmployee}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full lg:w-[25%] flex flex-col space-y-4">
            <div className="border border-black/15 rounded-xl shadow-sm w-full px-4 py-2.5 text-md focus:outline-none focus:ring-1 focus:ring-blue-500 flex justify-between">
              <div className="text-md">Monthly Salary - </div>
              <div className="text-md font-[500]">
                ${selectedEmployee.netSalary}
              </div>
            </div>

            <ProfileCard employee={selectedEmployee} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Salary;