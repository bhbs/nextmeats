import React from "react";
import { LanguageCode } from "../lib/language";
import styles from "./snsLink.module.scss";

const SnsLink = ({
  languageCode,
}: {
  languageCode: LanguageCode;
}): React.ReactElement => {
  return (
    <section
      style={{
        margin: "auto",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <div>{"＼　FOLLLOW US　／"}</div>
      <div className={styles.links}>
        <a
          href={
            {
              jp: "https://www.facebook.com/NextMeats",
              en: "https://www.facebook.com/NEXT-MEATS-106450371376253",
              tw: "https://www.facebook.com/nextmeats.taiwan",
            }[languageCode]
          }
          target="_blank"
          rel="noreferrer"
        >
          {facebook_logo}
        </a>
        <a
          href={
            {
              jp: "https://twitter.com/MeatsNext",
              en: "https://twitter.com/nextmeats",
              tw: "https://twitter.com/nextmeats",
            }[languageCode]
          }
          target="_blank"
          rel="noreferrer"
        >
          {twitter_logo}
        </a>
        <a
          href={
            {
              jp: "https://instagram.com/nextmeatsjapan/",
              en: "https://instagram.com/next_meats",
              tw: "https://instagram.com/nextmeats_tw",
            }[languageCode]
          }
          target="_blank"
          rel="noreferrer"
        >
          {instagram_logo}
        </a>
      </div>
    </section>
  );
};

const twitter_logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="22.753"
    viewBox="0 0 28 22.753"
  >
    <path
      d="M144.3,1534.359c.017.247.017.494.017.743,0,7.591-5.779,16.345-16.345,16.345h0a16.256,16.256,0,0,1-8.805-2.58,11.518,11.518,0,0,0,8.5-2.381,5.751,5.751,0,0,1-5.365-3.988,5.715,5.715,0,0,0,2.594-.1,5.744,5.744,0,0,1-4.609-5.63v-.07a5.7,5.7,0,0,0,2.607.719,5.751,5.751,0,0,1-1.777-7.674,16.3,16.3,0,0,0,11.839,6,5.75,5.75,0,0,1,9.789-5.239,11.526,11.526,0,0,0,3.648-1.4,5.764,5.764,0,0,1-2.526,3.179,11.4,11.4,0,0,0,3.3-.9A11.652,11.652,0,0,1,144.3,1534.359Z"
      transform="translate(-119.166 -1528.694)"
      fill="black"
    />
  </svg>
);

const instagram_logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27.999"
    height="28"
    viewBox="0 0 27.999 28"
  >
    <g transform="translate(-228.835 -1526.695)">
      <g>
        <g>
          <g>
            <path
              d="M248.863,1554.695H236.8a7.977,7.977,0,0,1-7.966-7.971v-12.06a7.978,7.978,0,0,1,7.969-7.969h12.061a7.978,7.978,0,0,1,7.969,7.969v12.06A7.978,7.978,0,0,1,248.863,1554.695Zm-12.061-25.6a5.576,5.576,0,0,0-5.569,5.569v12.06a5.576,5.576,0,0,0,5.569,5.569h12.061a5.576,5.576,0,0,0,5.572-5.569v-12.06a5.576,5.576,0,0,0-5.569-5.569Z"
              fill="black"
            />
          </g>
          <g>
            <path
              d="M242.833,1548.008a7.309,7.309,0,1,1,7.308-7.31h0A7.317,7.317,0,0,1,242.833,1548.008Zm0-12.17a4.862,4.862,0,1,0,4.862,4.862h0a4.868,4.868,0,0,0-4.862-4.866Z"
              fill="black"
            />
          </g>
          <g>
            <path
              d="M252.045,1533.136a1.757,1.757,0,1,1-1.758-1.756h0A1.756,1.756,0,0,1,252.045,1533.136Z"
              fill="black"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const facebook_logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
  >
    <path
      d="M200.619,1526.695H175.713a1.547,1.547,0,0,0-1.547,1.547v24.906a1.547,1.547,0,0,0,1.547,1.547h13.411v-10.807h-3.658v-4.259h3.64v-3.109c0-3.62,2.206-5.59,5.433-5.59a30.719,30.719,0,0,1,3.281.187v3.778h-2.23c-1.754,0-2.093.83-2.093,2.053v2.7h4.2l-.545,4.239H193.5v10.808h7.123a1.547,1.547,0,0,0,1.547-1.547h0v-24.906a1.547,1.547,0,0,0-1.547-1.547Z"
      transform="translate(-174.166 -1526.695)"
      fill="black"
    />
  </svg>
);

export default SnsLink;