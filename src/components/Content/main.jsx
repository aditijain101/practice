import { Stack } from '@mui/material';
import React from 'react';
import LeftSideBar from "./Sidebar/LeftSidebar";
import RightSideBar from "./Sidebar/RightSidebar";
import MidContent from "./MidContent/mid";
function main(props) {
    return (
        <Stack direction={'row'} gap={3} style={{
            marginLeft:"12.5%"
        }}>
            <LeftSideBar/>
            <MidContent/>
            <RightSideBar/>
            
        </Stack>
    );
}

export default main;