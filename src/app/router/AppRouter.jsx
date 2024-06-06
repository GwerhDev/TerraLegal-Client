
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/login" Component={LoginPage} />
    </Routes>
  )
}