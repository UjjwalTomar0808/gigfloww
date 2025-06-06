import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const InfoCard = ({
  title,
  value,
  icon: Icon,
  iconColor = "#2C1336",
  iconBg = "#EED3EF",
  linkText,
  linkTo,
}) => {
  const iconStyle = { backgroundColor: iconBg, color: iconColor };

  return (
    <div className="lg:flex-1 p-4 shadow-sm border border-black/15 rounded-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex p-2 text-2xl rounded-full" style={iconStyle}>
          <Icon />
        </div>
      </div>
      <div className="my-4 text-2xl font-semibold">{value}</div>
      <div className="w-full h-[0.5px] bg-[#D6D6D6]"></div>
      <Link
        to={linkTo}
        className="flex justify-between mt-4 items-center group"
      >
        <div className="text-[14px] text-[#1163C1] font-[500] group-hover:underline">
          {linkText}
        </div>
        <div className="text-2xl text-[#1163C1]">
          <GoArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default InfoCard;