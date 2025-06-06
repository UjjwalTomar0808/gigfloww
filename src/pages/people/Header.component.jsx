import React, { useState } from "react";
import { Search, ChevronDown, Check, SlidersHorizontal } from "lucide-react";
import { CiExport } from "react-icons/ci";

const TYPES = ["Active", "Inactive"];
const ROLES = [
  "Software Engineer",
  "Visual Designer",
  "UI/UX Designer",
  "Content Writer",
  "Sales Manager",
  "Mobile Assistant",
  "Product Manager",
  "Data Analyst",
  "DevOps Engineer",
  "Marketing Manager",
  "Frontend Developer",
  "HR Specialist",
  "Backend Developer",
  "QA Engineer",
  "Project Manager",
  "UX Researcher",
  "Systems Administrator",
  "Business Analyst",
  "Security Specialist",
  "Content Strategist",
  "Mobile Developer",
];
const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Content",
  "Operation",
  "Product",
  "Analytics",
  "Marketing",
  "Human Resources",
  "Quality Assurance",
  "IT",
  "Business",
  "Security",
];
const STATUS = ["Active", "Inactive"];

const Header = ({ onExport, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    searchTerm: "",
    type: "",
    role: "",
    department: "",
    status: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    type: false,
    role: false,
    advanced: false,
  });

  const handelSearch = (e) => {
    setSearchTerm(e.target.value);
    const updatedFilters = { ...filters, searchTerm: e.target.value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({
      type: false,
      role: false,
      advanced: false,
      [field]: !prev[field],
    }));
  };

  const handleSelect = (field, value) => {
    const isSame = filters[field] === value;
    const updatedFilters = {
      ...filters,
      type: field === "type" ? (isSame ? "" : value) : "",
      role: field === "role" ? (isSame ? "" : value) : "",
      department: field === "department" ? (isSame ? "" : value) : "",
      status: field === "status" ? (isSame ? "" : value) : "",
    };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="flex flex-wrap justify-between items-center my-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handelSearch(e)}
            className="pl-10 pr-4 py-2 border border-black/15 rounded-xl shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 font-[500] text-[16px]"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("type")}
            className="flex items-center gap-2 px-4 py-2 border border-black/15 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 font-[500] text-[16px]"
          >
            {filters.type || "Type"}
            <ChevronDown className={`transition-transform ${dropdownOpen.type ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen.type && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {TYPES.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    handleSelect("type", option);
                    toggleDropdown("type");
                  }}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                    filters.type === option
                      ? "font-semibold bg-blue-50 border border-blue-500 rounded flex items-center justify-between"
                      : ""
                  }`}
                >
                  {option}
                  {filters.type === option && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("role")}
            className="flex items-center gap-2 px-4 py-2 border border-black/15 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 font-[500] text-[16px]"
          >
            {filters.role || "Role"}
              <ChevronDown className={`transition-transform ${dropdownOpen.role ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen.role && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto overflow-x-hidden">
              {ROLES.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    handleSelect("role", option);
                    toggleDropdown("role");
                  }}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                    filters.role === option
                      ? "font-semibold bg-blue-50 border border-blue-500 rounded flex items-center justify-between"
                      : ""
                  }`}
                >
                  {option}
                  {filters.role === option && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => toggleDropdown("advanced")}
            className="flex items-center gap-2 px-4 py-2 border border-black/15 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50 font-[500] text-[16px]"
          >
            <SlidersHorizontal />
            Advanced Filter
             <ChevronDown className={`transition-transform ${dropdownOpen.advanced ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen.advanced && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-72">
              <div className="mb-4">
                <label className="text-sm font-semibold">Department</label>
                <div className="mt-1">
                  {DEPARTMENTS.map((dep) => (
                    <div
                      key={dep}
                      onClick={() => handleSelect("department", dep)}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                        filters.department === dep
                          ? "font-semibold bg-blue-50 border border-blue-500 rounded flex items-center justify-between"
                          : ""
                      }`}
                    >
                      {dep}
                      {filters.department === dep && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold">Status</label>
                <div className="mt-1">
                  {STATUS.map((stat) => (
                    <div
                      key={stat}
                      onClick={() => handleSelect("status", stat)}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                        filters.status === stat
                          ? "font-semibold bg-blue-50 border border-blue-500 rounded flex items-center justify-between"
                          : ""
                      }`}
                    >
                      {stat}
                      {filters.status === stat && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onExport}
        className="flex items-center text-xl gap-2 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer"
      >
        Export
        <CiExport />
      </button>
    </div>
  );
};

export default Header;