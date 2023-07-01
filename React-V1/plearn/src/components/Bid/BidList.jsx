import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function BidList({ transaction }) {
  console.log(transaction)
  const [maxCostOwner, setMaxCostOwner] = useState("");

  const obj = transaction?.item.bids[transaction?.item.bids.length - 1].bid;
  const SortedArray = obj.sort((a, b) => b.bidAmount - a.bidAmount);
  let i = 1;
  function calculateTimeDifference(timestamp, currentTimestamp) {
    var timestampDate = new Date(timestamp);
    var currentDate = new Date(currentTimestamp);

    var difference = currentDate - timestampDate;
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    // Check the magnitude of the time difference and return the corresponding string
    if (days > 0) {
      return days + " day" + (days > 1 ? "s" : "") + " ago";
    } else if (hours > 0) {
      return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    } else if (minutes > 0) {
      return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    } else {
      return "Just now";
    }
  }

  return (
    <Container>
      {SortedArray?.map((key) => {
        var timestamp = key.timestamp;
        var currentTimestamp = new Date().toISOString();

        var difference = calculateTimeDifference(timestamp, currentTimestamp);

        return (
          <div class="activity__item d-md-flex align-items-center justify-content-between mb-10">
            <div class="activity__item-inner d-flex align-items-center">
              <div class="activity__thumb mr-20">
                <a href="/product-details">
                  <img
                    width={70}
                    src={`https://robohash.org/${key.bidAmount}`}
                    alt=""
                  />
                </a>
                <span class="activity__tag ">#{i++}</span>
              </div>
              <div class="activity__content">
                <h3 class="activity__title">
                  <a className="n" href="/product-details">
                    {key.bidAmount} ETH
                  </a>
                </h3>
                <p>
                  by <a href="/profile">{key.bidderAddress.slice(0, 8)}</a>
                </p>
              </div>
            </div>
            <div class="activity__status">
              <p>{difference}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  .activity__item {
    padding: 15px 30px;
    border: 1px solid hsla(0, 0%, 100%, 0.18);
    box-shadow: 0 1px 2px rgba(4, 18, 38, 0.1);
    border-radius: 10px;
  }
  .n {
    color: white;
    transition: all 0.5s ease-in-out;
  }
  .activity__item-inner {
    gap: 18px;
  }
  span,
  a {
    font-size: 14px;
    text-decoration: none;
  }
  p {
    font-size: 12px;
  }
  .product__bid .activity__thumb img {
    width: 50px;
    height: 50px;
  }
  .activity__thumb img {
    border-radius: 50%;
  }
  .activity__tag {
    display: inline-block;
    position: relative;
    top: -20px;
    left: -16px;
    width: 25px;
    height: 25px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(110.22deg, #00c6fb 6.52%, #005bea 91%);
  }
  .activity__content {
    p {
      color: #bec4d2;
      margin-bottom: 0;
    }
  }
  .activity__content > p a {
    color: #3771fe;
    font-weight: 600;
  }
  .activity__content {
    p {
      a:hover {
        color: #3771fe;
      }
    }
  }
`;
