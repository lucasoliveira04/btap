import { t } from "i18next";
import { ComingSoon } from "../components/ComingSoon";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Itatiba() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ComingSoon message={`${t("projects.emDesenvolvimento")}`} />
      <Footer />
    </div>
  );
}
