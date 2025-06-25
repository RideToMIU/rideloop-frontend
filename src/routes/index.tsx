import { Route } from "react-router";
import App from "../App";

export default function MainRoutes() {
  return (
    // <Routes>
    //   <Route path="/auth/*" element={<AuthLayout />} />
    <Route path="/" element={<App />} />
    // </Routes>
  );
}
