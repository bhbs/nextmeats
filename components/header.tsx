import Link from "next/link";
import React from "react";

type Props = {
  locale: string;
};

const Header = ({ locale }: Props): React.ReactElement => (
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
        {locale === "jp" && (
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
        <li className="luxbar-item dropdown">
          <a>STORE</a>
          <ul>
            <li className="luxbar-item">
              <a
                href="https://shop.nextmeats.jp"
                target="_blank"
                rel="noreferrer"
              >
                OFFICIAL SHOP
              </a>
            </li>
            <li className="luxbar-item">
              <a
                href="https://www.amazon.co.jp/s?me=ALHPY7JG61WY1"
                target="_blank"
                rel="noreferrer"
              >
                AMAZON
              </a>
            </li>
            <li className="luxbar-item">
              <a
                href="https://store.shopping.yahoo.co.jp/whitehole/a5d7a5e9a5.html"
                target="_blank"
                rel="noreferrer"
              >
                YAHOO
              </a>
            </li>
          </ul>
        </li>
        <li className="luxbar-item">
          <Link href="/company">
            <a>COMPANY</a>
          </Link>
        </li>
        <li className="luxbar-item dropdown">
          <a>LANGUAGE</a>
          <ul>
            {locale !== "jp" && (
              <li className="luxbar-item">
                <a href="//nextmeats.co.jp" target="_blank" rel="noreferrer">
                  日本語
                </a>
              </li>
            )}
            {locale !== "en" && (
              <li className="luxbar-item">
                <a href="//nextmeats.us" target="_blank" rel="noreferrer">
                  ENGLISH
                </a>
              </li>
            )}
            {locale !== "tw" && (
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
