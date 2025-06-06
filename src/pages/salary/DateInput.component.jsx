import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DateDropdown = ({selectedMonth,setSelectedMonth}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  const months = [
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "June 2025",
    "July 2025",
  ];

  return (
    <div className="relative inline-block">
      <div
        className="flex space-x-2 py-2.5 px-2 items-center shadow-sm border border-black/15 rounded-lg cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-[14px] lg:text-[16px] font-normal">
          {selectedMonth}
        </div>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-black/15 rounded-lg shadow-sm">
          {months.map((month) => (
            <div
              key={month}
              className="px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(month)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;