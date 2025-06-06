import React, { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const OPTIONS = {
  skills: [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "React.js",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "Project Management",
    "Digital Marketing",
    "Content Writing",
    "Graphic Design",
    "Data Analysis",
    "Machine Learning",
    "DevOps",
    "Mobile Development",
    "WordPress",
  ],
  experience: [
    "0-1 years",
    "1-2 years",
    "2-3 years",
    "3-5 years",
    "5-7 years",
    "7+ years",
  ],
  employmentType: [
    "Full time",
    "Part time",
    "Contract",
    "Internship",
    "Freelance",
  ],
  workplaceType: ["Remote", "On-site", "Hybrid"],
  openings: ["1", "2", "3", "4", "5", "6-10", "10+"],
};

const PLACEHOLDERS = {
  role: "e.g UI/UX Designer",
  skills: "Enter required skill(s)",
  experience: "e.g 0-2 years",
  employmentType: "e.g Full time",
  workplaceType: "e.g Hybrid",
  stipend: "Enter the payment per month",
  openings: "e.g 2",
  description: "Enter detailed job description...",
  links: "Enter link",
};

const DropdownField = React.memo(({
  label,
  field,
  value,
  placeholder,
  dropdownOpen,
  toggleDropdown,
  handleInputChange
}) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div
      onClick={() => toggleDropdown(field)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center bg-white"
    >
      <span className={value ? "text-gray-800" : "text-gray-500"}>
        {value || placeholder}
      </span>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          dropdownOpen[field] ? "rotate-180" : ""
        }`}
      />
    </div>
    {dropdownOpen[field] && (
      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
        {OPTIONS[field].map((option) => (
          <div
            key={option}
            onClick={() => {
              handleInputChange(field, option);
              toggleDropdown(field);
            }}
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
));

const InputField = React.memo(({
  label,
  field,
  type = "text",
  rows,
  formData,
  handleInputChange
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {rows ? (
      <textarea
        rows={rows}
        placeholder={PLACEHOLDERS[field]}
        value={formData[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
      />
    ) : (
      <input
        type={type}
        placeholder={PLACEHOLDERS[field]}
        value={formData[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    )}
  </div>
));

const JobDetailsForm = () => {
  const [formData, setFormData] = useState({
    role: "",
    skills: [],
    experience: "",
    employmentType: "",
    workplaceType: "",
    stipend: "",
    openings: "",
    description: "",
    links: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    skills: false,
    experience: false,
    employmentType: false,
    workplaceType: false,
    openings: false,
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSkillToggle = useCallback((skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  }, []);

  const toggleDropdown = useCallback((dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = useCallback(() => {
    setFormData({
      role: "",
      skills: [],
      experience: "",
      employmentType: "",
      workplaceType: "",
      stipend: "",
      openings: "",
      description: "",
      links: "",
    });
    setDropdownOpen({
      skills: false,
      experience: false,
      employmentType: false,
      workplaceType: false,
      openings: false,
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold underline underline-offset-4 text-gray-800 mb-6">
        Fill in Job Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField 
          label="Role" 
          field="role" 
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skill(s) Required
          </label>
          <div
            onClick={() => toggleDropdown("skills")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center bg-white"
          >
            <span className="text-gray-500">
              {formData.skills.length > 0
                ? `${formData.skills.length} skill(s) selected`
                : PLACEHOLDERS.skills}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                dropdownOpen.skills ? "rotate-180" : ""
              }`}
            />
          </div>
          {dropdownOpen.skills && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {OPTIONS.skills.map((skill) => (
                <div
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                    formData.skills.includes(skill)
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => {}}
                    className="mr-2 pointer-events-none"
                  />
                  {skill}
                </div>
              ))}
            </div>
          )}
          {formData.skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillToggle(skill);
                    }}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <DropdownField
          label="Years of Experience/Experience Level"
          field="experience"
          value={formData.experience}
          placeholder={PLACEHOLDERS.experience}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleInputChange={handleInputChange}
        />
        <DropdownField
          label="Employment Type"
          field="employmentType"
          value={formData.employmentType}
          placeholder={PLACEHOLDERS.employmentType}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleInputChange={handleInputChange}
        />
        <DropdownField
          label="Workplace Type"
          field="workplaceType"
          value={formData.workplaceType}
          placeholder={PLACEHOLDERS.workplaceType}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleInputChange={handleInputChange}
        />
        <InputField 
          label="Stipend" 
          field="stipend" 
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <DropdownField
          label="No of Opening (if it is more than 1 one)"
          field="openings"
          value={formData.openings}
          placeholder={PLACEHOLDERS.openings}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleInputChange={handleInputChange}
        />
        <InputField 
          label="Job Description" 
          field="description" 
          rows={6} 
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <InputField 
          label="Relevant Link(s)" 
          field="links" 
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#2784B8] to-[#113B52] hover:bg-[#1f6b96] text-white px-6 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Submit Job
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            Reset Form
          </button>
        </div>
      </form>
    </>
  );
};

export default JobDetailsForm;