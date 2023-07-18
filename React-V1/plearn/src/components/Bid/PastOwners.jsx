import React from "react";
import styled from "styled-components";

export default function PastOwners({ transaction }) {
  console.log(transaction);
  const obj = transaction?.item?.bids[transaction?.item?.bids.length - 1].bid;
  const SortedArray = obj?.sort((a, b) => b.bidAmount - a.bidAmount);

  return (
    <Container>
      {SortedArray?.map((key) => {
        return <div class=""></div>;
      })}
    </Container>
  );
}
const Container = styled.div``;
