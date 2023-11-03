import React from "react";
import styled from "styled-components";
import cardBg from "../assets/pattern-background.jpg";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <Container>
      <div style={{ background: `url(${cardBg})` }} className="flex    bg-d">
        <div className="dflex bg-black  ">
          <img
            src="https://media.istockphoto.com/id/1368757787/photo/web3-blockchain-technology-concepts-hand-levitating-a-digital-smiling-box-icon-and-many.jpg?s=612x612&w=0&k=20&c=mqscvjybZFIOmY4d-LMvW38zjcmDNeChfUhU-WSTGRk="
            alt=""
          />
          <div class="section-title">
            <h1 class="title">About Us</h1>
            <p>
              PLEARN is a virtual 3D game which aims to raise the awareness of
              financial literacy. PLEARN has a variety of features, interactive
              graphics, realistic scenarios, and entertaining educational
              elements that keep players engaged. The game tests the players'
              problem-solving skills, also has levels that progressively
              increase in difficulty, allowing players to learn more as they
              advance. Players could track their learning and playing progress
              through the game, while earning rewards and unlocking new areas.
              Upon completion of a comprehensive investigation, we have
              discovered that there exists a significant deficit in the
              financial literacy among teenagers. This highlights the pressing
              need to enhance the financial competencies of this demographic
            </p>
            <div class="row mt--30 mt_sm--10">
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="about-us-list">
                  <h3 class="title">Our Mission</h3>
                  <p>
                    Enhancing the recognition of the significance of educating
                    financial literacy and sustainable finance, and emphasizing
                    the certainty that the youth demographic will be faced with
                    sustainable investment alternatives when making asset
                    allocation decisions.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="about-us-list">
                  <h3 class="title">Our Vision</h3>
                  <p>
                    Empowering youth through strong financial literacy to be
                    able to make savvy financial decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex cols   ">
          <div class="col-lg-4 container col-12">
            <div class="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 class="title">Services</h2>
            </div>
          </div>
          <div class=" grid-cols-2 mt_md--50">
            <div class="col-8">
              <div class="service service__style--2">
                <div class="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                </div>
                <div class="content">
                  <h3 class="title">Finance Development </h3>
                  <p>
                    PLEARN multifaceted approach aims to foster a deeper
                    understanding of financial concepts, such as budgeting,
                    investing, financial planning, and risk management. By
                    promoting financial literacy within the game features, and
                    also empower individuals to make informed financial
                    decisions, ultimately leading to improved
                    financial well-being.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <a>
                <div class="service service__style--2">
                  <div class="icon">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div class="content">
                    <h3 class="title">Marketing strategy</h3>
                    <p>
                      In PLEARN, we understand that a robust marketing strategy
                      is the foundation of a thriving business. Our dedicated
                      team of experts conducts thorough market research,
                      competitive analysis, and trend tracking to uncover
                      opportunities and challenges. Armed with this knowledge,
                      we craft a strategic roadmap that outlines the most
                      impactful channel.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-8">
              <a>
                <div class="service service__style--2">
                  <div class="icon">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div class="content">
                    <h3 class="title">Business</h3>
                    <p>
                      At PLEARN, our business strategy is to seamlessly infuse
                      financial education into our audience's daily lives. This
                      approach encompasses planning, execution, and evaluation
                      of initiatives that enhance financial knowledge. By
                      integrating financial literacy into our core operations,
                      we aim to help individuals achieve their financial goals,
                      foster economic well-being, and boost resilience.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <h1> Our Projects</h1>
          <div className="flexd container mt-5">
            <div class="card">
 <img src="https://hivemind.capital/wp-content/uploads/2023/02/web3_Gaming.jpg" alt="" />
 <div class="content">
                <a href="#">
                  <span class="title">Cryprostein Trading</span>
                </a>

                <p class="desc">
                  Cryptostein Trading is a user-friendly platform designed to
                  simulate real-world trading experiences. Users can engage in
                  activities such as buying, selling, and trading a wide variety
                  of digital assets, including a diverse range of
                  cryptocurrencies. The platform also offers additional
                  services, such as staking, lending, and even features its own
                  native cryptocurrency.
                </p>

                <a class="action" href="#">
                  Find out more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div class="card">
             <img src="https://miro.medium.com/v2/resize:fit:1400/1*lTzHypIxXkgJbRfQ76lVxw.jpeg" alt="" /> 
             <div class="content">
                <a href="#">
                  <span class="title">PLEARN ESGROW</span>
                </a>

                <p class="desc">
                  PLEARN ESGROW is an initiative platform which is focusing on
                  addressing critical environmental, social, and governance
                  (ESG) issues through innovative solutions and sustainable
                  practices. And it’s dedicated to create a positive impact by
                  promoting responsible business practices, sustainability, and
                  social well-being.
                </p>

                <a class="action" href="#">
                  Find out more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default AboutUs;
const Container = styled.div`
  .service {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  background: #101010;
  .flexd {
    display: flex;
    justify-content: space-evenly;
  }
  .mission {
    width: 100%;
    height: 100%;
  }
  .dflex {
    padding: 10vw; 
    display: flex;
    border-radius:20px;
    align-items: center;
    gap: 20px;
    img {
      height: 60vh;
      width: 65vh;
      border-radius: 9999px;
    }
  }
  .grid-cols-2 {
    align-items: center;
    justify-items: center;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .bg-d {
    padding-bottom: 20vh;
    justify-items: center;
    background-attachment: fixed !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover !important;
    align-items: center !important;
  }
  .mt--30 {
    margin-top: 20px;
  }
  .teams .flex {
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    min-height: 35vh;
  }

  .p-3 {
    padding: 10vh !important;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    min-height: 35vh;
  }
  .service__style--1 {
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .crd {
    display: flex;
    background-position: 100% 50%;
    flex-direction: column;
    background-size: cover;
    padding: 1rem;
    align-items: end;
    border-radius: 18px;
    position: relative;
    overflow: hidden;
    justify-content: space-between;

    .boxx {
      width: 20rem;
    }
    p {
      color: white;
    }
    .mt-10 {
      margin-top: 8rem;
    }
  }
  .thumbnail img {
    border-radius: 8px;
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.1);
    margin-top: -119px;
  }
  a {
    transition: all 0.4s ease-in-out 0s;
  }

  a {
    color: white;
    text-decoration: none;
    background-color: transparent;
  }
  .icon {
    font-size: 54px;
    font-weight: 400;
    display: inline-flex;
    color: white;
  }
  h3 {
    font-size: 19px;
    color: white;
    margin-bottom: 19px;
    font-weight: 500;
  }
  .mt-5 {
    .card {
      max-width: 30vw; 
      border-radius: 0.5rem;
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid transparent;
    }

    .card a {
      text-decoration: none;
    }

    .content {
      padding: 1.1rem;
    }

    .image {
      object-fit: cover;
      width: 100%;
      height: 150px; 
    }

    .title {
      color: #111827;
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 600;
    }

    .desc {
      margin-top: 0.5rem;
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    .action {
      display: inline-flex;
      margin-top: 1rem;
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      align-items: center;
      gap: 0.25rem;
      background-color: #2563eb;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .action span {
      transition: 0.3s ease;
    }

    .action:hover span {
      transform: translateX(4px);
    }
  }
  a:active,
  a:focus,
  a:hover {
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #ea9629;
  }
  h2.title {
    font-size: 60px;
  }
  .description {
    font-size: 18px;
    line-height: 30px;
  }
  p {
    color: #c6c9d8;
    font-size: 15px;
    line-height: 20px;
    font-family: Poppins, sans-serif;
    opacity: 0.75;
    font-weight: 300;
  }
  .align-items-center {
    justify-content: space-evenly;
  }

  img {
    margin-bottom: 34px;
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }
  .flexg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin: 25px 0;
    word-wrap: break-word;
    font-size: 90px;
    line-height: 112px;
  }
   
  @media only screen and (max-width: 580px) {
    h1 {
      font-size: 50px !important;
    line-height: 52px !important;

    }
  }
  @media only screen and (max-width: 980px) {
    h1 {
      font-size: 70px;
    line-height: 72px;
   
    }
    .flexd {  
      flex-direction: column; 
      gap:20px;
    }
    .dflex {
      img {
        display: none;
      }
    }
    .mt-5 {
      .card {
        max-width:80vw;
      }
    .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;
