import React from "react";
import styled from "styled-components";
import coin from "../../assets/MarketPlace/A (5).png";
import { useDispatch } from "react-redux";
import { SetBlog } from "../../Store/Slice/Cardslice";
import { useNavigate } from "react-router-dom";
export default React.memo(function Cards(props) {
  const { Category, Name, id, ImgUri, desc, price, buy } = props.data;
  const nav = useNavigate();
  const dispatch = useDispatch();
  const HandleClick = async () => {
    try {
      await dispatch(
        SetBlog({
          Category: Category,
          Name: Name,
          price: price,
          id: id,
          ImgUri: ImgUri,
          desc: desc,
        })
      );
      // await console.log(Name);
      nav(`/Buy/${Name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div key={Category} className="card">
        <>
          <div className="type">
            <img className="icon" src={coin} height="30px" />
            <p>{price} ETH</p>
          </div>
          <div
            className="ImgWrap"
            id={id}
            style={{ background: `url(${ImgUri})` }}
          ></div>
          <div className="card-body">
            <h1>{Name}</h1>
            <p className="desp">{desc}</p>
            <div className="details"></div>
            <div className="product">
              <a
                className="btn"
                onClick={() => {
                  HandleClick();
                }}
              >
                Buy now
              </a>
            </div>
          </div>
        </>
      </div>
    </Container>
  );
});
const Container = styled.div`
  .desp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-word;
    text-align: left;
    line-height: 26px;
  }
  .btn {
    --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
    --border-width: 0.125em;
    --curve-size: 0.5em;
    --blur: 30px;
    --bg: #080312;
    --color: #afffff;
    color: var(--color);
    position: relative;
    isolation: isolate;
    display: inline-grid;
    place-content: center;
    padding: 0.5em 1.5em;
    font-size: 17px;
    border: 0;
    text-transform: uppercase;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
    clip-path: polygon(
      0% var(--curve-size),
      var(--curve-size) 0,
      100% 0,
      100% calc(100% - var(--curve-size)),
      calc(100% - var(--curve-size)) 100%,
      0 100%
    );
    transition: color 1000ms;
  }

  .btn::after,
  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  .btn::before {
    background: var(--border-color);
    background-size: 300% 300%;
    animation: move-bg7234 5s ease infinite;
    z-index: -2;
  }

  @idframes move-bg7234 {
    0% {
      background-position: 31% 0%;
    }

    50% {
      background-position: 70% 100%;
    }

    100% {
      background-position: 31% 0%;
    }
  }

  .btn::after {
    background: var(--bg);
    z-index: -1;
    clip-path: polygon(
      var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }

  .btn:where(:hover, :focus)::after {
    clip-path: polygon(
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
    transition: 500ms;
  }

  .btn:where(:hover, :focus) {
    color: #fff;
  }
  .card {
    align-self: center;
    background: linear-gradient(
      0deg,
      rgba(40, 44, 52, 1) 0%,
      rgba(17, 0, 32, 0.5) 100%
    );
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: 0.7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: 0.5s all;
    border-radius: 15px;
    max-height: 640px;
    user-select: none;
    max-width: 300px;
    margin: 5rem auto;
    border: 1px solid #ffffff22;
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: 0.7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: 0.5s all;
    &::before {
      position: fixed;
      content: "";
      box-shadow: 0 0 100px 40px #ffffff08;
      top: -10%;
      left: -100%;
      transform: rotate(-45deg);
      height: 60rem;
      transition: 0.7s all;
    }
    &:hover {
      border: 1px solid #ffffff44;
      box-shadow: 0 7px 50px 10px #000000aa;
      transform: scale(1.015);
      filter: brightness(1);
      ::before {
        filter: brightness(0.5);
        top: -100%;
        left: 200%;
      }
    }
  }
  .ImgWrap {
    background-size: cover !important;
    background-position: center !important;
    height: 250px;
  }
  .product {
    align-items: center;
    border-top: 2px solid #3d4047;
    display: flex;
    justify-content: center;
    padding: 24px 20px 20px 20px;
    width: 100%;
  }
  .card p {
    color: white;
    margin-bottom: 20px;
    color: #808191;
    font-family: "Bai Jamjuree", Sans-serif;
    font-weight: 500;
  }

  .thumbnail img {
    border-radius: 20px 20px 0px 0px;
    border-radius: 8px;
  }

  h1 {
    font-family: Outfit;
    font-style: normal;
    color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    width: 100%;
    align-items: center;
    border-top: 2px solid var(--shop-divider-color);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
  }
  .type {
    position: absolute;
    right: 40%;
    top: 70%;
    display: inline-block;
    opacity: 1;
    opacity: 0;
    vertical-align: bottom;
    white-space: nowrap;
    transform: translate(0px, 12px);
    transition: max-width 1s, opacity 1s, transform 0.75s;
    img {
      margin-bottom: 10px;
      width: 50px;
      height: 50px;
    }
  }

  .type p {
    color: #54b9c5;
    cursor: pointer;
    font-size: 0.8vw;
    line-height: 0.8vw;
    font-weight: 800;
  }
  .card:hover {
    .type {
      opacity: 1;
      transform: translate(0px, 2px);
    }
  }
  .type .icon {
    margin-right: 10px;
  }

  p {
    color: #8bacd9;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    text-align: center;
  }

  .type {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .time p {
    color: #8bacd9;
    font-family: Outfit;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }

  .card-body {
    min-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
