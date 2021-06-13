import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LanguageCode } from "../lib/language";
import SnsLink from "./snsLink";

type Props = {
  languageCode: LanguageCode;
  path: string;
};

const Footer = ({ languageCode, path }: Props): React.ReactElement => {
  const [hostname, setHostname] = useState("");
  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);
  return (
    <footer>
      <div>
        <p>
          Country:{" "}
          <Link href={path} locale="ja">
            <a
              style={{
                color: "#444",
                fontWeight: hostname === "nextmeats.co.jp" ? "bold" : "normal",
              }}
            >
              日本
            </a>
          </Link>{" "}
          /{" "}
          <Link href={path} locale="en-US">
            <a
              style={{
                color: "#444",
                fontWeight: hostname === "nextmeats.us" ? "bold" : "normal",
              }}
            >
              United States
            </a>
          </Link>{" "}
          /{" "}
          <Link href={path} locale="zh-TW">
            <a
              style={{
                color: "#444",
                fontWeight: hostname === "nextmeats.tw" ? "bold" : "normal",
              }}
            >
              台湾
            </a>
          </Link>
        </p>
        <p>
          Language:{" "}
          <Link
            href={languageCode === "jp" ? path : `/ja/${path}`}
            locale={false}
          >
            <a
              style={{
                color: "#444",
                fontWeight: languageCode === "jp" ? "bold" : "normal",
              }}
            >
              日本語
            </a>
          </Link>{" "}
          /{" "}
          <Link
            href={languageCode === "en" ? path : `/en/${path}`}
            locale={false}
          >
            <a
              style={{
                color: "#444",
                fontWeight: languageCode === "en" ? "bold" : "normal",
              }}
            >
              English
            </a>
          </Link>{" "}
          /{" "}
          <Link
            href={languageCode === "zh" ? path : `/zh/${path}`}
            locale={false}
          >
            <a
              style={{
                color: "#444",
                fontWeight: languageCode === "zh" ? "bold" : "normal",
              }}
            >
              中文
            </a>
          </Link>
        </p>
      </div>
      <SnsLink languageCode={languageCode} color="black" />
      <span>© 2021 Next Meats Co., Ltd.</span>
    </footer>
  );
};

export default Footer;
