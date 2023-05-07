import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React from "react";
import BidList from "./BidList";

export default function InfoTab() {
  return (
    <Tabs>
      <TabList>
        <Tab>Owner</Tab>
        <Tab>Bid List</Tab>
        <Tab>Title 3</Tab>
        <Tab>Title 4</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>
          <BidList></BidList>
        </h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  );
}
