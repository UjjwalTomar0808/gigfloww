import React from "react";
import Components from "../../shared/components/export";
import JobDetailsForm from "./Form.component";
import ManagePost from "./ManagePost.component";
import Assets from "../../assets/export";
import {
  JOB_SECTION_TITLE,
  JOB_SECTION_DESCRIPTION,
  MANAGE_POSTING_TITLE,
  MANAGE_POSTING_SEE_ALL,
  AI_TITLE,
  AI_DESCRIPTION,
  AI_BUTTON_TEXT,
  mockPosts,
} from "../../utils/const/hiring.constants";

const Hiring = () => {
  return (
    <>
      <Components.navbar />
      <section className="my-10 mx-2 lg:mx-6">
        <p className="text-[20px] font-[500] mb-2">{JOB_SECTION_TITLE}</p>
        <p className="text-[16px] text-[#333333] font-normal mb-2">
          {JOB_SECTION_DESCRIPTION}
        </p>

        <div className="w-full flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 mt-10">
          <div className="w-full lg:w-[70%]">
            <JobDetailsForm />
          </div>

          <div className="w-full lg:w-[30%] flex flex-col space-y-4">
            <div className="border border-black/15 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div className="text-[18px] font-[500]">
                  {MANAGE_POSTING_TITLE}
                </div>
                <div className="text-[14px] text-[#2784B8]">
                  {MANAGE_POSTING_SEE_ALL}
                </div>
              </div>

              <ManagePost posts={mockPosts} />
            </div>

            <div className="border border-black/15 rounded-xl p-4">
              <img src={Assets.aiPosting} alt="" className="h-[160px] mb-4" />
              <div className="text-[18px] font-semibold text-[#242831] mb-4.5">
                {AI_TITLE}
              </div>
              <div className="text-[14px] text-[#3A3A3A] mb-2">
                {AI_DESCRIPTION}
              </div>
              <button className="w-full bg-gradient-to-r from-[#2784B8] to-[#113B52] hover:bg-[#1f6b96] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-[#2784B8] focus:ring-offset-2 outline-none text-sm sm:text-base">
                {AI_BUTTON_TEXT}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hiring;