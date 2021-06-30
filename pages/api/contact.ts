import { NextApiRequest, NextApiResponse } from "next";
import { createTransport, SentMessageInfo } from "nodemailer";
import { LanguageCode } from "../../lib/language";

type Verification = {
  success?: true | false;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

type Info = {
  title?: string;
  mail?: string;
  message?: string;
  token?: string;
  languageCode?: LanguageCode;
};

export default async function verifyAndSendMail(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const info = JSON.parse(req.body);
  if (info.token) {
    const verification = await siteVerify(info.token);
    verification.success && (await sendText(info));
    res.status(200).json(
      {
        jp: "メールが送信されました。",
        en: "An email has been sent.",
        zh: "An email has been sent.",
      }[info.languageCode]
    );
  } else {
    res.status(200).json(
      {
        jp: `メールの送信に失敗しました。お手数ですが、直接メールでお問い合わせください。${process.env.MAIL_TO}`,
        en: `error, contact us directly. ${process.env.MAIL_TO}`,
        zh: `error, contact us directly. ${process.env.MAIL_TO}`,
      }[info.languageCode]
    );
  }
}

const siteVerify = async (token: string): Promise<Verification> =>
  await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPCHA_SITEKEY_SECRET,
      response: token,
    }).toString(),
  }).then((response) => response.json());

const sendText = async (info: Info): Promise<SentMessageInfo> => {
  const transporter = createTransport({
    host: "smtp.lolipop.jp",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_FROM_PW,
    },
  });

  return await transporter.sendMail({
    from: `"メールフォーム"<${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: info.title,
    text: `
      from: ${info.mail}
      message: ${info.message}
    `,
  });
};
