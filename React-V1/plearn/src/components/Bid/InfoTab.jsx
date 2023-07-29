import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React, { useState } from "react";
import BidList from "./BidList";
import { CgDetailsMore } from "react-icons/cg";
export default function InfoTab({ transaction }) {
  const [ShowBidders, setShowBidders] = useState(false);
  return (
    <Tabs>
      <TabList>
        <Tab
          onClick={() => {
            setShowBidders(!ShowBidders);
          }}
        >
          <h1 style={{ fontSize: "34px" }}>Bid List</h1>
          {<CgDetailsMore size={"34px"} />}
        </Tab>
      </TabList>
      <TabPanel style={{ display: `${ShowBidders ? "inherit" : "none"}` }}>
        {transaction && <BidList transaction={transaction}></BidList>}
      </TabPanel>
    </Tabs>
  );
}
