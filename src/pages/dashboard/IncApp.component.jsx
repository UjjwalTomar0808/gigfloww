import { SlidersHorizontal } from "lucide-react";
import React from "react";
import { ArrowRight, Building2 } from "lucide-react";

const ProfileCard = React.memo(
  ({
    name,
    role,
    profileImage,
    experience,
    company,
    dateRange,
    cardColor = "bg-purple-500",
  }) => {
  return (
    <div className="shadow-sm border border-black/15 rounded-md flex-1 p-4 min-w-[280px] max-w-[350px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 ring-2 ring-gray-100">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-14 py-[2px]">
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-[#3A3A3A]">{role}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-[#242831] mb-3">
          {experience}
        </h4>

        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-lg ${cardColor} flex items-center justify-center shadow-sm`}
          >
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 text-sm">{company}</p>
            <div className="flex items-center gap-1 text-xs text-[#737373] mt-1">
              {dateRange}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-[#D6D6D6]"></div>

      <button className="w-full flex items-center justify-between text-blue-600 hover:text-blue-700 text-sm font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 border border-transparent hover:border-blue-100">
        <span>View Resume</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
});

const teamMembers = [
  {
    name: "Elizabeth Filade",
    role: "3 years in Software Development",
    experience: "Latest Experience",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    company: "Tucker Inc",
    dateRange: "1 Dec 2024 - 16 May 2025",
    cardColor: "bg-purple-500",
  },
  {
    name: "Andre Suares",
    role: "3 years in Software Development",
    experience: "Latest Experience",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    company: "Tucker Inc",
    dateRange: "1 Dec 2024 - 16 May 2025",
    cardColor: "bg-red-500",
  },
  {
    name: "Ishita Ashuth",
    role: "3 years in Software Development",
    experience: "Latest Experience",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    company: "Tucker Inc",
    dateRange: "1 Dec 2024 - 16 May 2025",
    cardColor: "bg-purple-500",
  },
  {
    name: "Ishita Ashuth",
    role: "3 years in Software Development",
    experience: "Latest Experience",
    profileImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    company: "Tucker Inc",
    dateRange: "1 Dec 2024 - 16 May 2025",
    cardColor: "bg-purple-500",
  },
];

const IncApp = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between gap-6 my-10">
        <div>
          <div className="text-2xl font-semibold">Incoming Application</div>
          <div className="text-[14px] lg:text-[16px] font-normal">
            Manage application for your job posting{" "}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex space-x-2 h-[50px] px-8 items-center shadow-sm border border-black/15 rounded-lg cursor-pointer">
            <SlidersHorizontal />
            <div className="text-[14px] lg:text-[16px] font-normal">Filter</div>
          </div>
          <div className="flex h-[50px] px-8 items-center shadow-sm rounded-lg cursor-pointer bg-gradient-to-r from-[#2784B8] to-[#113B52] hover:bg-[#1f6b96] text-white font-medium">
            See all
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            experience={member.experience}
            profileImage={member.profileImage}
            company={member.company}
            dateRange={member.dateRange}
            cardColor={member.cardColor}
          />
        ))}
      </div>
    </section>
  );
};

export default IncApp;