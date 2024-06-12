import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/Admin/DashboardPage";
import ContentListPage from "../pages/Admin/ContentListPage";
import ContentCreatePage from "../pages/Admin/ContentCreatePage";
import OnSalePage from "../pages/OnSalePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/:token" element={<AuthPage />} />
      
      <Route path="/on-sale" element={<OnSalePage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/content-list" element={<ContentListPage />} />
      <Route path="/admin/content-create" element={<ContentCreatePage />} />
    </Routes>
  );
}