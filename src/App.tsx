import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ForgotPasswordPage from "./pages/forgotPassword";
import OTPPage from "./pages/otp";
import ResetPasswordPage from "./pages/resetPassword";
import EditResumePage from "./pages/editResumeData";

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route path="/" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/forgot-password" Component={ForgotPasswordPage} />
          <Route path="/otp" Component={OTPPage} />
          <Route path="/reset-password" Component={ResetPasswordPage} />
          <Route path="/edit-resume" Component={EditResumePage} />
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;
