import Home from "./Home";
import Auth from "./auth/Auth";
import Dashboard from "./dashboard/Dashboard";
import Hirings from "./hiring/Hiring";
import People from "./people/People";
import Salary from "./salary/Salary";
import Review from "./review/Review";
// import RegisterPageClient from "./auth/RegisterPageClient";  

const Pages = {
  home: Home,
  auth: Auth,
//   register: RegisterPageClient, 
  dashboard: Dashboard,
  people: People,
  hiring: Hirings,
  salary: Salary,
  review: Review
};

export default Pages;
