import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "../pages/UserPage";
import { PigeLife } from "../pages/PigeLife";
import { Itatiba } from "../pages/Itatiba";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/pigelife" element={<PigeLife />} />
        <Route path="/itatiba" element={<Itatiba />} />
      </Routes>
    </BrowserRouter>
  );
}
