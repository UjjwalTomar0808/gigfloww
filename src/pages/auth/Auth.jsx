import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Layouts from "../../shared/layout/export";
import Assets from "../../assets/export";
import { useNavigate } from "react-router-dom";
import { TEXT, INITIAL_FORM_DATA, APP_NAME, LOGO_ALT } from "../../utils/const/auth.constants";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Login data:", {
        email: formData.email,
        password: formData.password,
      });
      navigate("/dashboard");
    } else {
      console.log("Signup data:", formData);
      navigate("/dashboard");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <Layouts.auth>
      <div className="flex h-[35px] gap-4 items-center">
        <img src={Assets.onlyLogo} alt={LOGO_ALT} className="w-[35px] h-[35px]" />
        <div className="text-[20px] sm:text-[24px] lg:text-[28px] text-[#2784B8] font-bold">
          {APP_NAME}
        </div>
      </div>

      <div className="flex flex-col mt-8 sm:mt-10 lg:mt-12">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] text-black font-[500] mb-2 leading-tight">
          {isLogin ? TEXT.welcomeBack : TEXT.welcome}
        </h1>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#3A3A3A] text-center tracking-wider">
          {isLogin ? TEXT.signInPrompt : TEXT.signUpPrompt}
          <br />
          {!isLogin && TEXT.signUpLabel}
        </p>
      </div>

      <div className="w-full max-w-sm sm:max-w-md lg:w-[60%] space-y-4 sm:space-y-5 lg:space-y-6 mt-6 sm:mt-7 lg:mt-8">
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {TEXT.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={TEXT.namePlaceholder}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 shadow-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2784B8] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isLogin ? TEXT.emailLabelLogin : TEXT.emailLabelSignup}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={isLogin ? TEXT.emailPlaceholderLogin : TEXT.emailPlaceholderSignup}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 shadow-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2784B8] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {TEXT.passwordLabel}
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={TEXT.passwordPlaceholder}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 shadow-xs border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2784B8] focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#2784B8] to-[#113B52] hover:bg-[#1f6b96] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-[#2784B8] focus:ring-offset-2 outline-none text-sm sm:text-base"
        >
          {isLogin ? TEXT.signInButton : TEXT.signUpButton}
        </button>
      </div>

      {!isLogin && (
        <p className="text-xs sm:text-sm text-[#414141] text-center font-semibold mt-2 px-4">
          {TEXT.termsText}{" "}
          <a href="#" className="text-[#2784B8] hover:underline">
            {TEXT.termsLink}
          </a>
        </p>
      )}

      <div className="absolute bottom-4 right-4 sm:right-5">
        <p className="text-[#414141] font-normal text-xs sm:text-sm">
          {isLogin ? TEXT.toggleTextLogin : TEXT.toggleTextSignup}
          <button
            type="button"
            onClick={toggleMode}
            className="text-[#2784B8] hover:underline font-medium focus:outline-none"
          >
            {isLogin ? TEXT.toggleButtonLogin : TEXT.toggleButtonSignup}
          </button>
        </p>
      </div>
    </Layouts.auth>
  );
};

export default Auth;