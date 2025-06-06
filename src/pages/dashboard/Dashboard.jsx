import React from "react";
import Components from "../../shared/components/export";
import { AiOutlineThunderbolt } from "react-icons/ai";
import DateInput from "./DateInput.component";
import InfoCard from "./InfoCard.component";
import PerformanceChart from "./Chart.component";
import UpActionList from "./UpAction.component";
import IncApp from "./IncApp.component";
import { TbCalendarShare } from "react-icons/tb";
import { INFO_CARD_DATA, MOCK_ACTIONS, DASHBOARD_TEXT } from "../../utils/const/dashboard.constants";

const Dashboard = () => {
  return (
    <>
      <Components.navbar />
      <main className="mt-2 mx-2 lg:mt-6 lg:mx-6 ">
        <div className="flex space-x-2 py-2.5 px-2 w-full items-center shadow-sm border border-black/15 rounded-xl">
          <div className="flex p-2 text-2xl text-white bg-[#1163C1] rounded-full">
            <AiOutlineThunderbolt />
          </div>

          <div className="text-[12px] sm:text-[16px] font-[500]">
            {DASHBOARD_TEXT.notification.message}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <h1 className="text-xl lg:text-3xl font-semibold">
            {DASHBOARD_TEXT.heading}
          </h1>

          <DateInput />
        </div>

        <section className="flex flex-col h-auto my-8 lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-3/4 flex flex-col space-y-4">
            <div className="w-full flex flex-col lg:flex-row space-x-2 space-y-2 lg:space-y-0">
              {INFO_CARD_DATA.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>
            <div className="w-full flex-grow border border-black/15 rounded-md overflow-hidden">
              <PerformanceChart />
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-4 border border-black/15 rounded-md overflow-y-auto max-h-[600px]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-[500]">{DASHBOARD_TEXT.sectionTitle}</h2>
              <div className="flex p-2 text-2xl rounded-full bg-white border border-black/15 text-black">
                <TbCalendarShare />
              </div>
            </div>
            <UpActionList actions={MOCK_ACTIONS} />
          </div>
        </section>

        <IncApp />
      </main>
    </>
  );
};

export default Dashboard;