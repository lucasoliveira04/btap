import { useTranslation } from "react-i18next";

export function ContactForm() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-purple-500/40 rounded-3xl p-10 shadow-2xl"
      style={{ boxShadow: "0 0 25px rgba(255, 165, 0, 0.1)" }}
    >
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t("contactForm.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t("contactForm.namePlaceholder")}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-2">
              {t("contactForm.reasonLabel")}
            </label>
            <select
              id="reason"
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option className="text-black">
                {t("contactForm.reasonOptions.default")}
              </option>
              <option className="text-black">
                {t("contactForm.reasonOptions.doubt")}
              </option>
              <option className="text-black">
                {t("contactForm.reasonOptions.feedback")}
              </option>
              <option className="text-black">
                {t("contactForm.reasonOptions.quote")}
              </option>
              <option className="text-black">
                {t("contactForm.reasonOptions.other")}
              </option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("contactForm.messageLabel")}
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={t("contactForm.messagePlaceholder")}
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
            style={{ boxShadow: "0 0 15px rgba(255, 165, 0, 0.5)" }}
          >
            {t("contactForm.submitButton")}
          </button>
        </div>
      </form>
    </div>
  );
}
