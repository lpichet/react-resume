import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

type ContactFormProps = {
  location: string;
  phoneNumber: string;
  email: string;
};
export default function Contact({
  location,
  phoneNumber,
  email,
}: ContactFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <hr className="d-print-none" />
      <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
        <h2 className="h3 text mb-3">{t("Contact")}</h2>
        <div className="row">
          <ContactForm />
          <div className="col">
            <div className="mt-2">
              <h3 className="h6">{t("Location")}</h3>
              <div className="pb-2 text-secondary">{location}</div>
              <h3 className="h6">{t("Phone")}</h3>
              <div className="pb-2 text-secondary">{phoneNumber}</div>
              <h3 className="h6">{t("Email")}</h3>
              <div className="pb-2 text-secondary">{email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
