import { GetStaticProps, GetStaticPropsResult } from "next";
import React, { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";
import styles from "../styles/contact.module.scss";

type Props = {
  languageCode: LanguageCode;
};

const SecureContact = ({ languageCode }: Props): React.ReactElement => {
  return (
    <Layout languageCode={languageCode}>
      <GoogleReCaptchaProvider reCaptchaKey="6Lea7DUaAAAAAIXSUT4AWLG6tdZOpnd5YqWeM-Pk">
        <Contact languageCode={languageCode} />
      </GoogleReCaptchaProvider>
    </Layout>
  );
};

const Contact = ({ languageCode }: Props): React.ReactElement => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    executeRecaptcha("contact").then(async (token) => {
      setMessage({ jp: "送信中…", en: "send", zh: "send" }[languageCode]);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          title: e.target.title.value,
          mail: e.target.mail.value,
          message: e.target.message.value,
          token,
          languageCode,
        }),
      }).then((response) =>
        response.status > 200
          ? `error, contact us directly. ${process.env.MAIL_TO}`
          : response.text()
      );
      setMessage(response);
    });
  };

  return (
    <div className="page">
      <h2>
        {{ jp: "お問い合わせ", en: "Contact", zh: "Contact" }[languageCode]}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>
          <input
            name="title"
            type="text"
            placeholder={{ jp: "名前", en: "name", zh: "name" }[languageCode]}
            required
          />
        </p>
        <p>
          <input
            name="mail"
            type="email"
            placeholder={
              { jp: "Eメール", en: "email", zh: "email" }[languageCode]
            }
            required
          />
        </p>
        <p>
          <textarea
            name="message"
            placeholder={
              { jp: "メッセージ", en: "message", zh: "message" }[languageCode]
            }
            required
          ></textarea>
        </p>
        <p>
          {message ? (
            <p>{message}</p>
          ) : (
            <button>
              {{ jp: "送信", en: "send", zh: "send" }[languageCode]}
            </button>
          )}
        </p>
      </form>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale: Locale;
}): Promise<GetStaticPropsResult<Props>> => {
  const languageCode: LanguageCode = getLanguageCode(locale);

  return { props: { languageCode } };
};

export default SecureContact;
