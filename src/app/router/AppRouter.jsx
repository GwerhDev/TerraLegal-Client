import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/LoginPage";
import OnSalePage from "../pages/OnSalePage";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/Admin/DashboardPage";
import OnSaleDetailsPage from "../pages/OnSaleDetailsPage";
import ContentListPage from "../pages/Admin/ContentListPage";
import ContentCreatePage from "../pages/Admin/ContentCreatePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/on-sale" element={<OnSalePage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/:token" element={<AuthPage />} />

      <Route path="/on-sale/:id" element={<OnSaleDetailsPage />} />

      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/content-list" element={<ContentListPage />} />
      <Route path="/admin/content-create" element={<ContentCreatePage />} />
    </Routes>
  );
}