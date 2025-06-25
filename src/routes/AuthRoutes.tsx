import { Route, Routes } from "react-router";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import AuthLayout from "../pages/layout/AuthLayout";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
