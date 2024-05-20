import React from "react";
// import { Button, Flex, Segmented } from "antd";
// import Box from "@mui/material/Box";

import { Tabs } from "antd";
import PageTitle from "../../components/Title_Page/TitlePage";
import All_Attendance from "./tab/All_Attendance";
import Personal_Attendace from "./tab/Personal_Attendance";

const Info = () => {
  const items = [
    {
      key: "1",
      label: "All Attendace",
      children: <All_Attendance />,
    },
    {
      key: "2",
      label: "Personal Attendace",
      children: <Personal_Attendace />,
    },
  ];

  return (
    <>
      <PageTitle PageTitle="Attendance" />
      <div className="border-box">
        <Tabs defaultActiveKey="1" type="card" size={"large"} items={items} />
      </div>

      {/* <Box
      height={600}
      width={1400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box> */}
  
    </>
  );
};
export default Info;
