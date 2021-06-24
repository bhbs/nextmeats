import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pagesPath } from "../lib/$path";
import { LanguageCode } from "../lib/language";
import logo from "../public/img/header/logo.png";

type Props = {
  languageCode: LanguageCode;
};

type TLD = "jp" | "us" | "tw";

const Header = ({ languageCode }: Props): React.ReactElement => {
  const [TLD, setTLD] = useState<TLD>("jp");

  useEffect(() => {
    setTLD(/[^.]*$/.exec(location.host)[0] as TLD);
  }, []);

  return (
    <header id="luxbar" className="luxbar-fixed">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
      <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul className="luxbar-navigation">
          <li className="luxbar-header">
            <Link href={pagesPath.$url()}>
              <a className="luxbar-brand">
                <Image
                  src={logo}
                  alt="next meats logo"
                  width={180}
                  height={24.91}
                  placeholder="blur"
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
            <Link href={pagesPath.news.$url()}>
              <a>NEWS</a>
            </Link>
          </li>
          {TLD === "jp" && (
            <li className="luxbar-item">
              <Link href="https://shop.nextmeats.jp">
                <a target="_blank">SHOP</a>
              </Link>
            </li>
          )}
          {TLD === "us" && (
            <li className="luxbar-item">
              <Link href="https://shop.nextmeats.us">
                <a target="_blank">SHOP</a>
              </Link>
            </li>
          )}
          {languageCode === "jp" && (
            <li className="luxbar-item">
              <Link href="https://media.nextmeats.jp">
                <a>MEDIA</a>
              </Link>
            </li>
          )}
          <li className="luxbar-item">
            <Link href={pagesPath.message.$url()}>
              <a>MESSAGE</a>
            </Link>
          </li>
          <li className="luxbar-item">
            <Link href={pagesPath.company.$url()}>
              <a>COMPANY</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
