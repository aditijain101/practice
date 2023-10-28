import React from 'react';
import styled from "./sidebar.module.css";
import { Stack } from '@mui/material';
import Home from "../../assets/home.svg";
import Notification from "../../assets/notification.svg";
import heart from "../../assets/heart.svg";
import message from "../../assets/message.svg";
import wallet from "../../assets/message.png";
import subscription from "../../assets/favorite.png";
import profile from "../../assets/profile.png";
import setting from "../../assets/setting.png";
function LeftSidebar(props) {
    return (

        <div className={styled.leftSidebar}>
            <div className={styled.optionsContainer}>
                <Stack className={styled.options} direction={'column'} gap={3}>
                    <Stack direction={'row'} gap={3}>
                        <img src={Home} />
                        <div>Home</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={Notification} />
                        <div>Notifications</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={heart} />
                        <div>Shop</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={message} />
                        <div>Conversation</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={wallet} />
                        <div>Wallet</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={subscription} />
                        <div>Subscription</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={profile} />
                        <div>My Profile</div>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={setting} />
                        <div>Settings</div>
                    </Stack>
                </Stack>
            </div>
            <Stack direction={'row'} justifyContent={'space-between'} marginTop={"4%"}>
                <div className={styled.bottomtext}>2022©logo name</div>
                <div className={styled.bottomtext}>Developed by ivan Infotech</div>
            </Stack>
        </div>
    );
}

export default LeftSidebar;