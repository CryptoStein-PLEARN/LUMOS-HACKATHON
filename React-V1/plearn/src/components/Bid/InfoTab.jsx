import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React from "react";
import BidList from "./BidList";

export default function InfoTab({ transaction }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Owner</Tab>
        <Tab>Bid List</Tab>
      </TabList>

      <TabPanel>
        <h2>{transaction?.item?.currentOwner.slice(0, 5)}</h2>
      </TabPanel>
      <TabPanel>
        {transaction && <BidList transaction={transaction}></BidList>}
      </TabPanel>
    </Tabs>
  );
}
