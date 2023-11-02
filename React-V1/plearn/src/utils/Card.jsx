import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const { user } = props;
  return (
    <Container>
      <div className="card">
        {" "}
        <img src={`${user.Image}`} alt="" />
        <div className="content">
          <p className="title">
            {user.name}
            <br />
            <span>{user.description}</span>
          </p>
          <ul className="sci">
            <li
              style={{
                display: `${user.gitLink === "null" ? "none" : "block"}`,
              }}
            >
              {console.log(user.gitLink)}
              <a href={user.gitLink}>
                <svg
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                >
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
                </svg>
              </a>
            </li>

            <li
              style={{
                background: "#6b64f3",
              }}
            >
              <a href={user.linkedInLink}>
                <svg
                  className="fa-brands fa-linkedin-in"
                  width="34"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .card {
    position: relative;
    width: 352px;
    border: none;
    height: 391px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .user-picture {
      overflow: hidden;
      object-fit: cover;
      position: absolute;
      z-index: 9999;
      width: 280px;
      height: 290px;
      background: white;
      top: 0%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .card img {
    position: absolute;
    z-index: 3;
    top: 0%;
    scale: 0.8;
    transition: 0.5s;
  }

  .card:hover img {
    scale: 1;
    cursor: grab;
    opacity: 0.9;
  }
  .user-picture:hover {
    scale: 1;
    opacity: 0.9;
  }
  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card .content {
    bottom: -55px;
  }

  .content .title {
    position: relative;
    color: white;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.5em;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
    padding: 0px;
  }

  .sci li {
    list-style: none;
    border-radius: 10%;
  }

  .sci li .fa-brands {
    width: 14px;
  }

  .sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
  }

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
`;
