import React from "react";

export default function Intro(props) {
  return (
    <main className="intro-container">
      <div className="blob-blue">
        <svg
          width="205"
          height="186"
          viewBox="0 0 205 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.4481 4.90596C92.9614 1.77498 139.243 -9.72149 169.306 19.1094C202.581 51.0203 212.282 102.703 199.701 147.081C187.767 189.18 150.745 220.092 108.821 232.476C73.5281 242.902 41.5668 218.605 7.89933 203.738C-28.3375 187.737 -76.6412 182.993 -88.7407 145.239C-101.358 105.868 -75.2695 64.5881 -46.0642 35.3528C-20.7328 9.99541 15.7273 7.60006 51.4481 4.90596Z"
            fill="#DEEBF8"
          />
        </svg>
      </div>
      <div className="blob-rose">
        <svg
          width="158"
          height="148"
          viewBox="0 0 158 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M63.4095 88.3947C35.1213 57.8508 -2.68211 28.7816 1.17274 -12.6933C5.43941 -58.599 39.854 -98.3588 82.4191 -116.133C122.797 -132.994 170.035 -123.256 205.822 -98.1494C235.947 -77.0141 236.823 -36.8756 246.141 -1.27104C256.17 37.0508 282.521 77.8106 260.501 110.779C237.538 145.159 188.991 150.432 147.931 145.768C112.318 141.723 87.7505 114.677 63.4095 88.3947Z"
            fill="#FFFAD1"
          />
        </svg>
      </div>
      <h1 className="intro-title">Quizzical</h1>
      <p className="intro-p">Some description if needed</p>
      <div className="btn-container">
        <button className="intro-btn" onClick={props.clickHandle}>
          Start quiz
        </button>
      </div>
    </main>
  );
}
