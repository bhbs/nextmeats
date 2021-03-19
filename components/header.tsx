import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LanguageCode } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
  path: string;
};

const Header = ({ languageCode, path }: Props): React.ReactElement => (
  <header id="luxbar" className="luxbar-fixed">
    <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
    <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
      <ul className="luxbar-navigation">
        <li className="luxbar-header">
          <Link href="/">
            <a className="luxbar-brand">
              <Image
                src="/img/header/logo.png"
                alt="next meats logo"
                width={180}
                height={24.91}
              />
            </a>
          </Link>
          <label
            className="luxbar-hamburger luxbar-hamburger-doublespin"
            id="luxbar-hamburger"
            htmlFor="luxbar-checkbox"
          >
            <span></span>
          </label>
        </li>
        <li className="luxbar-item">
          <Link href="/news">
            <a>NEWS</a>
          </Link>
        </li>
        <li className="luxbar-item">
          <Link href="/message">
            <a>MESSAGE</a>
          </Link>
        </li>
        <li className="luxbar-item">
          <Link href="https://shop.nextmeats.jp">
            <a target="_blank">STORE</a>
          </Link>
        </li>
        <li className="luxbar-item">
          <Link href="/company">
            <a>COMPANY</a>
          </Link>
        </li>
        {languageCode === "jp" && (
          <li className="luxbar-item">
            <Link href="https://nextmeats.jp">
              <a>MEDIA</a>
            </Link>
          </li>
        )}
        <li className="luxbar-item dropdown">
          <a>LANGUAGE</a>
          <ul>
            {languageCode !== "jp" && (
              <li className="luxbar-item">
                <Link href={path} locale="ja">
                  <a>日本語</a>
                </Link>
              </li>
            )}
            {languageCode !== "en" && (
              <li className="luxbar-item">
                <Link href={path} locale="en-US">
                  <a>English</a>
                </Link>
              </li>
            )}
            {languageCode !== "tw" && (
              <li className="luxbar-item">
                <Link href={path} locale="zh">
                  <a>中文</a>
                </Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
