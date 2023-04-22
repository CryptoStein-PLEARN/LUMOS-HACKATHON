import React, { useState } from "react";
import styled from "styled-components";
import NFT from "../assets/Images/NFT_Card.png";
export default React.memo(function Faq() {
  const [open, setOpen] = useState({});

  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };
  const accordionData = [
    {
      id: 1,
      title: "What is the main goal of plearn?",
      content:
        "The main goal of plean is to teach players the basics of managing money and investments as well as it provide an entertaining elements that keep players engaged",
    },
    {
      id: 2,
      title: "How can i get Started?",
      content:
        "To get started, you can sign up for an account on our website and start playing the game. You can also check out our tutorials and guides for help.",
    },
    {
      id: 3,
      title: "Do I need to have a wallet to register?",
      content:
        "No, You can join using your email, then you can connect you wallet or not.",
    },
    {
      id: 4,
      title: "Is PLEARN available on web only?",
      content:
        "Yes, temporarily. However, we are planning to implement the game on android and ios soon.",
    },
  ];
  return (
    <Container>
      <section className="elementor-element">
        <div className="elementor-container">
          <div>
            <div className="elementor-widget-wrap ">
              <div className="elementor-element elementor-widget ">
                <div className="">
                  <div className="qodef-shortcode qodef-m qodef-accordion clear qodef-behavior--accordion qodef-layout--simple ui-accordion ui-widget ui-helper-reset qodef--init">
                    {accordionData.map((data) => (
                      <>
                        <div key={data.id}>
                          <h4
                            className={`qodef-accordion-title ui-accordion-header ui-corner-top ui-state-default ${
                              open[data.id]
                                ? ""
                                : "ui-accordion-header-collapsed"
                            } ui-corner-all`}
                            onClick={() => handleClick(data.id)}
                            tabIndex="0"
                          >
                            <span className="qodef-tab-title">
                              {data.title}
                            </span>
                            <span className="qodef-accordion-mark">
                              <svg
                                style={{
                                  transform: `scaleY(${
                                    open[data.id] ? "-1" : "1"
                                  })`,
                                  transition:
                                    "transform 0.4s cubic-bezier(0.39, .1, 0, .98)",
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
                          </h4>

                          <div
                            className={`qodef-accordion-content ${
                              open[data.id] ? "" : "open"
                            }`}
                          >
                            <div className="qodef-accordion-content-inner">
                              <p>{data.content}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-col-50  elementor-element">
            <div className="elementor-widget-wrap ">
              <div className="elementor-element ">
                <div className="">
                  <div className="qodef-shortcode qodef-m">
                    <div className="qodef-m-image">
                      <img
                        src={NFT}
                        className="attachment-full size-full"
                        alt="d"
                        sizes="(max-width: 505px) 100vw, 505px"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
});

const Container = styled.div`
  .elementor-element {
    padding: 0 0 20px;
    .elementor-container {
      width: 90vw;
      max-width: 90vw;
      margin: 0 auto;
      align-items: center;
      padding-top: 5%;
      display: flex;
      position: relative;
      .elementor-widget-wrap {
        position: relative;
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        padding: 0;
        align-content: flex-end;
        .elementor-element {
          width: 100%;
          .qodef-accordion {
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: top;
            visibility: visible;
            overflow-anchor: none;
            .qodef-accordion:before {
              content: "";
              display: table;
              table-layout: fixed;
            }
            h4 {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 2px 0 0;
              padding: 14px 0 15px 0;
              gap: 2rem;
              border-bottom: 1px solid white;
              cursor: pointer;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              font-size: 25px;
              line-height: 1.44em;
              word-wrap: break-word;
            }
            .qodef-accordion-mark {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              transition: transform 0.4s cubic-bezier(0.39, 0.1, 0, 0.98);
              fill: white;
            }
          }
          .qodef-accordion-content {
            margin: 0;
            max-width: 70ch;
            padding: 14px 0 15px 0;
            .qodef-accordion-content-inner {
              position: relative;
              display: inline-block;
              width: 100%;
              vertical-align: top;
              overflow: hidden;
            }
          }
        }
      }
      .qodef-m-image {
        display: flex;
        justify-content: flex-end;
      }
      @media (min-width: 768px) {
        .elementor-col-5 {
          width: 57%;
          padding-left: 50px;
          padding-right: 50px;
        }
      }
      @media (min-width: 768px) {
        .elementor-col-50 {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 1204px) {
    .elementor-container {
      width: 86%;
      flex-wrap: wrap;
    }
  }
  @media only screen and (max-width: 1200px) {
    .elementor-container {
      width: 960px;
    }
  }
  .open {
    display: none;
  }
`;
