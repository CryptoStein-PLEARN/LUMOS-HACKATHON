import React, { useState } from "react";
import styled from "styled-components";

export default function PastOwners({ transaction }) {
  const [ShowEvents, setShowEvents] = useState(false);
  const [Loading, isLoading] = useState(false);
  console.log(transaction == null);

  return (
    <Container
      onClick={() => {
        setShowEvents(!ShowEvents);
      }}
    >
      <div className="fixed">
        <h1>Item History </h1>

        <span className="qodef-accordion-mark">
          <svg
            style={{
              transform: `scaleY(${ShowEvents ? "-1" : "1"})`,
              transition: "transform 0.4s cubic-bezier(0.39, .1, 0, .98)",
            }}
            className="qodef-svg--accordion-arrow"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="26"
            height="20.35"
            viewBox="0 0 26 20.35"
          >
            <path d="M26,0,12.974,20.35,0,0ZM13.026,12.608l5.336-8.423H7.638Z"></path>
          </svg>
        </span>
      </div>
      <div
        style={{ display: `${ShowEvents ? "inherit" : "none"}` }}
        className="p-2 mx-auto sm:p-4 dark:text-gray-100"
      >
        <div>
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">Event</th>
                <th className="p-3">From</th>
                <th className="p-3">To</th>
                <th className="p-3">Date</th>
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody className="border-b overflow dark:bg-gray-900 dark:border-gray-700">
              {transaction[0] &&
                transaction?.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td colSpan="5">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 text-2xl font-medium dark:text-gray-400">
                        <p>Auction</p>
                      </td>
                      <td className="px-3 py-2">
                        <p>{item?.buyerAddress.slice(0, 5)}</p>
                      </td>
                      <td className="px-3 py-2">
                        <p>{item?.sellerAddress.slice(0, 5)}</p>
                      </td>
                      <td className="px-3 py-2">
                        <p>
                          {
                            new Date(item?.timestamp)
                              .toISOString()
                              .split("T")[0]
                          }
                        </p>
                      </td>
                      <td className="px-3 py-2">
                        <p>{item?.cost}</p>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>{" "}
          </table>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url("https://1.bp.blogspot.com/-Fo3iRt97ZXY/XvSG4EMwi0I/AAAAAAAAVEo/mrApRTcVVRk1m-fX9K-ffNwRUXlHUocdwCLcBGAsYHQ/s1600/h.jpg");
  background-color: #181828;
  width: 50%;
  @media only screen and (max-width: 900px) {
    width: 97% !important;
  }
  cursor: pointer;
  border-radius: 10px;
  border-bottom: 1px solid white;
  border-image: initial;
  .qodef-accordion-mark {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.4s cubic-bezier(0.39, 0.1, 0, 0.98);
    fill: white;
  }
  th {
    box-shadow: 0px 15px 80px rgba(4, 255, 236, 0.25),
      0px 0px 0px rgba(10, 197, 173, 0.33);
    cursor: pointer;
    color: #00bcd4;
  }
  .w-full {
    width: 100%;
  }
  .p-2 {
    height: 70vh !important;
    max-height: 70vh !important;
    overflow: auto;
  }
  .p-2::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .p-2::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .p-2::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #00bcd4;
  }
  .fixed {
    background: rgba(4, 255, 236, 0.15);
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    h1 {
      margin: 0;
      padding: 20px;
    }
  }
`;
