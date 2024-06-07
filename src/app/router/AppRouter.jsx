
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
  )
}