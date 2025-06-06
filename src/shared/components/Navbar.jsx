import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Bell, Settings } from "lucide-react";
import Assets from "../../assets/export";
import { gradients, navItems, mobileMenuVariants } from "../../utils/const/navbar.constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const currentGradient = useMemo(() => {
    if (currentPath.includes("dashboard")) return gradients.dashboard;
    if (currentPath.includes("people")) return gradients.people;
    if (currentPath.includes("hiring")) return gradients.hiring;
    if (currentPath.includes("salary")) return gradients.salary;
    if (currentPath.includes("reviews")) return gradients.reviews;
    return gradients.default;
  }, [currentPath]);

  const updatedNavItems = useMemo(() => {
    return navItems.map((item) => ({
      ...item,
      active: currentPath.startsWith(item.path),
    }));
  }, [currentPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`bg-gradient-to-r ${currentGradient} shadow-xs relative z-50 mt-2 mx-2 lg:mt-6 lg:mx-4 rounded-[20px] lg:rounded-full`}
    >
      <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6">
        <div className="flex h-[30px] gap-2 lg:gap-4 items-center">
          <img src={Assets.onlyLogo} alt="logo" className="w-[30px] h-[30px]" />
          <div className="text-[18px] sm:text-[20px] lg:text-[24px] text-white font-bold">
            GIGFLOWW
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          {updatedNavItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-full text-md font-medium transition-all duration-200 ${
                  item.active
                    ? "bg-white text-[#2784B8] "
                    : "text-white hover:bg-white/10 hover:backdrop-blur-xs"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button className="hidden md:flex p-2 text-[#2784B8] bg-white hover:bg-white/90 rounded-full transition-colors duration-200">
            <Settings className="w-5 h-5" />
          </button>

          <div className="relative">
            <button className="flex p-2 text-[#2784B8] bg-white hover:bg-white/90 rounded-full transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={Assets.user}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 px-2 space-y-2">
              {updatedNavItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-white text-[#2784B8] shadow-md"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;