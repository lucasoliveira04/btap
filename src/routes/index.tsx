import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "../pages/UserPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
