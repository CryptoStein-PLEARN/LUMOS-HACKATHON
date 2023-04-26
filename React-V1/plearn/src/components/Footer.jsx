import React from "react";
import styled from "styled-components";
import bg from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
export default React.memo(function Footer() {
  const nav = useNavigate();
  return (
    <Container>
      <footer id="qodef-page-footer" role="contentinfo">
        <div id="qodef-page-footer-top-area">
          {/* <div
            class="sender-form-field"
            data-sender-form-id="lgi9os7zdb2wwd45y2v"
          ></div> */}
          <div
            id="qodef-page-footer-top-area-inner"
            className="qodef-content-full-width"
          >
            <div className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--1 qodef-alignment--center">
              <div className="qodef-grid-inner clear">
                <div className="qodef-grid-item">
                  <div
                    className="widget widget_artorias_core_single_image"
                    style={{ marginBottom: "0px", marginTop: "80px" }}
                  >
                    <div className="qodef-shortcode qodef-m  qodef-single-image qodef-layout--default  qodef--retina   ">
                      {" "}
                      <div className="qodef-m-image">
                        {" "}
                        <a itemprop="url" href="/" target="_self">
                          {" "}
                          <img
                            itemprop="image"
                            src={bg}
                            width="231"
                            height="193"
                            alt=""
                          />{" "}
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <div className="qodef-shortcode qodef-m  qodef-separator clear qodef-position--center ">
                      {" "}
                      <div className="qodef-m-line"></div>
                    </div>
                  </div>
                  <div
                    id="nav_menu-2"
                    className="widget widget_nav_menu"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <div className="menu-footer-menu-container">
                      <ul id="menu-footer-menu" className="menu">
                        <li
                          id="menu-item-3147"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3147"
                        >
                          <a
                            onClick={() => {
                              nav("/");
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-3148"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148"
                        >
                          <a
                            onClick={() => {
                              nav("//about-me");
                            }}
                          >
                            About
                          </a>
                        </li>
                        <li
                          id="menu-item-3149"
                          className="menu-item menu-item-type-post_type menu-item-object-esports-team menu-item-3149"
                        >
                          <a
                            onClick={() => {
                              nav("/Tokenomics");
                            }}
                          >
                            Tokenomics
                          </a>
                        </li>
                        <li
                          id="menu-item-3150"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3150"
                        >
                          <a
                            onClick={() => {
                              nav("/Policy");
                            }}
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li
                          id="menu-item-3151"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3151"
                        >
                          <a
                            onClick={() => {
                              nav("/Blog");
                            }}
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-2"
                    className="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div className="qodef-svg-icon-widget widget">
                      <a
                        href="https://www.instagram.com/cryptostein.official/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="qodef-m-holder">
                          <div className="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-3"
                    className="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div className="qodef-svg-icon-widget widget">
                      <a href="https://t.me/+q9Iz48nzpd4yN2Nk">
                        <div className="qodef-m-holder">
                          <div className="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-telegram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-4"
                    className="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div className="qodef-svg-icon-widget widget">
                      <a href="https://www.youtube.com/channel/UCn5qOdVJDN4KIjPN9Po9BGg">
                        <div className="qodef-m-holder">
                          <div className="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 28 21"
                            >
                              <path d="M27.7 4.7c0-2.4-1.8-4.4-4-4.4-3-.1-6-.2-9.2-.2h-1c-3.1 0-6.2.1-9.2.2-2.2 0-4 2-4 4.4C.2 6.6.1 8.5.1 10.5c0 1.9.1 3.8.2 5.8 0 2.4 1.8 4.4 4 4.4 3.1.1 6.4.2 9.6.2 3.3 0 6.5-.1 9.6-.2 2.2 0 4-2 4-4.4.1-1.9.2-3.9.2-5.8.2-1.9.1-3.8 0-5.8zM11.4 15.8V5.2l7.8 5.3-7.8 5.3z"></path>
                            </svg>{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-5"
                    className="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    {" "}
                    <div className="qodef-svg-icon-widget widget">
                      <a href="https://www.linkedin.com/company/cryptostein1/">
                        <div className="qodef-m-holder">
                          <div className="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-linkedin"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="artorias_core_svg_icon-5"
                    className="widget widget_artorias_core_svg_icon"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <div className="qodef-svg-icon-widget widget">
                      <a href="https://twitter.com/CryptoStein2022/">
                        <div className="qodef-m-holder">
                          <div className="qodef-m-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="block-18"
                    className="widget widget_block"
                    data-area="qodef-footer-top-area-column-1"
                  >
                    <p>
                      © 2022{" "}
                      <a className="qodef--change-color" href="#">
                        PLEARN
                      </a>
                      , All Rights Reserved
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
});
const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: top;
  #qodef-page-footer-top-area {
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: top;
    #qodef-page-footer-top-area-inner {
      margin: 60px 60px 60px 60px;
      --footer-margin-responsive: 0 7% 7%;
      border-width: 1px;
      border-style: solid;
      border: 0 solid white;
      padding-bottom: 0px;
      padding-top: 0px;
      .qodef-grid {
        position: relative;
        display: inline-block;
        width: 100%;
        border: 1px solid white;
        text-align: center;
        vertical-align: top;
        .qodef-grid-inner {
          margin: 0 -15px;
          .qodef-grid-item {
            width: 100%;
            padding: 0 15px;
            position: relative;
            display: inline-block;
            vertical-align: top;
            min-height: 1px;
            float: left;
            .widget {
              margin: 40px 0 30px;
              color: #ccc;
              a {
                color: white;
                text-decoration: none;
                transition: transform 0.2s ease-out;
                cursor: pointer;
              }
              a:hover {
                text-decoration: underline;
              }
              img {
                margin-right: auto;
                margin-left: auto;
              }
              .qodef-single-image img {
                margin: 0 auto;
              }
            }
          }
        }
        .qodef-position--center {
          text-align: center;
          font-size: 0;
          height: auto;
          line-height: 1;
          position: relative;
          .qodef-m-line {
            position: relative;
            display: inline-block;
            width: 100%;
            vertical-align: top;
            margin: 10px 0;
          }
        }
        .widget_nav_menu ul {
          display: flex;
          justify-content: space-evenly;
          list-style: none;
          align-items: center;
          margin: 0;
          padding: 0;
          li {
            font-family: "Space Mono", sans-serif;
            font-size: 17px;
            line-height: 1.58824em;
            font-weight: 400;
            letter-spacing: normal;
            text-transform: uppercase;
            a {
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              font-size: 17px;
              line-height: 1.41176em;
            }
          }
        }
      }
      .widget_artorias_core_svg_icon {
        display: inline-block;
        vertical-align: top;
        margin: 0 !important;
        fill: white;
        padding: 0.5rem;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: white;
          width: 24px;
          transition: color 0.2s ease-out;
          cursor: pointer;
          .qodef-m-holder {
            display: flex;
            align-items: center;
            .qodef-m-icon {
              margin: 0px 24px 0px 0px;

              width: 22px;
              height: 24px;
              border-radius: 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              max-height: 100%;
              overflow: hidden;
              transition: transform 0.3s ease, all 0.2s ease-out;
              svg {
                display: block;
                fill: white;
                stroke: transparent;
                max-width: 100%;
                max-height: 100%;
                width: 22px;
                height: 24px;
                transition: all 0.2s ease-out;
                transform: translateY(0);
              }
            }
          }
        }
      }
    }
  }
  #artorias_core_single_image-4 {
    margin-top: 90px !important;
  }
  .widget p {
    margin-top: 18px;
    color: #ccc;
  }
  @media only screen and (max-width: 760px) {
    .widget_nav_menu ul {
      flex-direction: column;
      padding: 20px;
      li {
        padding: 10px;
        text-decoration: underline;
      }
    }
    #qodef-page-footer-top-area #qodef-page-footer-top-area-inner {
      margin: 30px 30px 30px 30px !important;
    }
  }
`;
