import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const formAction = import.meta.env.VITE_FORM_ACTION;
  return (
    <>
      <div className="col-md-7 d-print-none">
        <div className="my-2">
          <form action={formAction} method="POST">
            <div className="row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("Your Name")}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="_replyto"
                  placeholder={t("Your E-mail")}
                  required
                />
              </div>
            </div>
            <div className="form-group my-2">
              <textarea
                className="form-control"
                style={{ resize: "none" }}
                id="message"
                name="message"
                rows={4}
                placeholder={t("Your Message")}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
