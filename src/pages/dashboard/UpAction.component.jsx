import React from "react";

const UpActionItem = ({ startTime, endTime, title, description, showBorder = true }) => {
  const borderClass = showBorder ? "border-b border-[#C4C4C4]" : "";

  return (
    <div className={`flex w-full py-4 ${borderClass}`}>
      <div className="w-[30%] max-w-[120px]">
        <div className="text-[16px] font-semibold h-[30px]">{startTime}</div>
        <div className="text-[14px] font-normal">{endTime}</div>
      </div>

      <div className="w-[1px] min-h-full bg-[#C4C4C4] mx-4" />

      <div className="flex-1">
        <div className="h-[30px] text-[14px] font-normal">{title}</div>
        <div className="text-[14px] font-[500]">{description}</div>
      </div>
    </div>
  );
};

const UpActionList = ({ actions }) => {
  return (
    <div className="w-full">
      {actions.map((action, index) => (
        <UpActionItem
          key={index}
          {...action}
          showBorder={index !== actions.length - 1}
        />
      ))}
    </div>
  );
};

export default UpActionList;