import React, { useState } from "react";
import Components from "../../shared/components/export";
import Header from "./Header.component";
import EmployeeTable from "./Table.component";
import Pagination from "./pagesPP.components";
import { mockEmployees } from "../../utils/const/people.constants";

const People = () => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEmployees, setFilteredEmployees] = useState(mockEmployees);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilter = (filters) => {
    const result = mockEmployees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        employee.jobTitle
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        employee.department
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      const matchesType = filters.type
        ? employee.status.toLowerCase() === filters.type.toLowerCase()
        : true;
      const matchesRole = filters.role
        ? employee.jobTitle.toLowerCase() === filters.role.toLowerCase()
        : true;
      const matchesDept = filters.department
        ? employee.department.toLowerCase() === filters.department.toLowerCase()
        : true;
      const matchesStatus = filters.status
        ? employee.status.toLowerCase() === filters.status.toLowerCase()
        : true;

      return (
        matchesSearch &&
        matchesType &&
        matchesRole &&
        matchesDept &&
        matchesStatus
      );
    });

    setFilteredEmployees(result);
    setCurrentPage(1);
  };

  const handleSelectEmployee = (employeeId) => {
    setSelectedEmployees((prev) =>
      prev.includes(employeeId)
        ? prev.filter((id) => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const handleExport = () => {
    if (!mockEmployees.length) return;

    const headers = Object.keys(mockEmployees[0]);

    const csvRows = [
      headers.join(","),
      ...mockEmployees.map((row) =>
        headers
          .map((field) => `"${row[field] ?? ""}"`)
          .join(",")
      ),
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "employee_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Components.navbar />
      <section className="my-10 mx-2 lg:mx-6">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl lg:text-3xl font-semibold">List of people</h1>

          <div className="flex h-[50px] px-4 lg:px-8 text-[14px] items-center shadow-sm rounded-lg cursor-pointer bg-gradient-to-r from-[#2784B8] to-[#113B52] hover:bg-[#1f6b96] text-white font-medium">
            Add new member
          </div>
        </div>

        <Header onExport={handleExport} onFilter={handleFilter} />

        <EmployeeTable
          employees={paginatedEmployees}
          selectedEmployees={selectedEmployees}
          onSelectEmployee={handleSelectEmployee}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default People;