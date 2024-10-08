"use clinet";
import React from "react";

const LoadingC = () => {
  return (
    <div>
      <div className="loader">
        <div className="block b_1"></div>
        <div className="block b_2"></div>
        <div className="block b_3"></div>
        <div className="block b_4"></div>
        <div className="block b_5"></div>
        <div className="block b_6"></div>
        <div className="block b_7"></div>
        <div className="block b_8"></div>

        {/* Loader CSS Styles */}
        <style jsx>{`
          .loader {
            height: 50px;
            width: 50px;
            position: relative;
          }

          .block {
            height: 10px;
            width: 10px;
            background-color: black;
            position: absolute;
            opacity: 0;
          }

          .b_1 {
            top: 0;
            left: 0;
            animation: load 2s infinite;
            animation-delay: 0;
          }

          .b_2 {
            top: 0;
            left: 20px;
            animation: load 2s infinite;
            animation-delay: 0.25s;
          }

          .b_3 {
            top: 0;
            right: 0;
            animation: load 2s infinite;
            animation-delay: 0.5s;
          }

          .b_4 {
            top: 20px;
            right: 0;
            animation: load 2s infinite;
            animation-delay: 0.75s;
          }

          .b_5 {
            bottom: 0;
            right: 0;
            animation: load 2s infinite;
            animation-delay: 1s;
          }

          .b_6 {
            bottom: 0;
            left: 20px;
            animation: load 2s infinite;
            animation-delay: 1.25s;
          }

          .b_7 {
            bottom: 0;
            left: 0;
            animation: load 2s infinite;
            animation-delay: 1.5s;
          }

          .b_8 {
            top: 20px;
            left: 0;
            animation: load 2s infinite;
            animation-delay: 1.75s;
          }

          @keyframes load {
            0% {
              opacity: 1;
            }

            85% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoadingC;
