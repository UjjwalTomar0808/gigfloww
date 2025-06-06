import React, { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

const DateInput = () => {
  const inputRef = useRef(null);
  const [date, setDate] = useState(new Date());

  const formattedDate = React.useMemo(() => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, [date]);

  const handleClick = () => {
    inputRef.current?.showPicker();
  };

  const handleChange = (e) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div
      className="flex space-x-2 py-2.5 px-2 items-center shadow-sm border border-black/15 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
      <div className="text-[14px] lg:text-[16px] font-normal">{formattedDate}</div>
      <input
        ref={inputRef}
        type="date"
        className="hidden"
        onChange={handleChange}
        value={date.toISOString().split("T")[0]}
      />
    </div>
  );
};

export default DateInput;