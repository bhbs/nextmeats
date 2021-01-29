import Link from "next/link";
import React from "react";
import { LanguageCode } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Header = ({ languageCode }: Props): React.ReactElement => (
  <header id="luxbar" className="luxbar-fixed">
    <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
    <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
      <ul className="luxbar-navigation">
        <li className="luxbar-header">
          <Link href="/">
            <a className="luxbar-brand">
              <img
                src="/img/header/logo.png"
                alt="next meats logo"
                style={{
                  width: "180px",
                }}
              />
            </a>
          </Link>
          <label
            className="luxbar-hamburger luxbar-hamburger-doublespin"
            id="luxbar-hamburger"
            htmlFor="luxbar-checkbox"
          >
            {" "}
            <span></span>{" "}
          </label>
        </li>
        {languageCode === "jp" && (
          <li className="luxbar-item">
            <Link href="/news">
              <a>NEWS</a>
            </Link>
          </li>
        )}
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
        <li className="luxbar-item dropdown">
          <a>LANGUAGE</a>
          <ul>
            {languageCode !== "jp" && (
              <li className="luxbar-item">
                <a href="//nextmeats.co.jp" target="_blank" rel="noreferrer">
                  日本語
                </a>
              </li>
            )}
            {languageCode !== "en" && (
              <li className="luxbar-item">
                <a href="//nextmeats.us" target="_blank" rel="noreferrer">
                  ENGLISH
                </a>
              </li>
            )}
            {languageCode !== "tw" && (
              <li className="luxbar-item">
                <a href="//nextmeats.tw" target="_blank" rel="noreferrer">
                  中文
                </a>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
