import React, { Profiler } from 'react';
import styled from "./sidebar.module.css";
import { Stack } from '@mui/material';
import Profile1 from "../../assets/profile1.png"
import Profile2 from "../../assets/profile2.png"
import Profile3 from "../../assets/profile3.png"
import Profile4 from "../../assets/profile4.png"

function RightSidebar(props) {
    return (
        <div style={{
            width: "19.25%",
            height: "75vh"
        }}>
            <div className={styled.rightsidebar}>
                <Stack direction={'row'} gap={4}>
                    <div className={styled.textrighsidebar}>Artists</div>
                    <div className={styled.textrighsidebar1}>Photographers</div>
                </Stack>
                <div className={styled.rightcard1}>
                    <Stack direction={'row'} gap={2} alignSelf={'flex-end'} display={"flex"}
                        style={{
                            marginLeft: "4%",
                            marginBottom: "4%"
                        }}>
                        <div>
                            <img src={Profile1} />
                        </div>
                        <Stack direction={'column'} gap={1}>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 16
                            }} >Thomas Edward</div>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 12
                            }} >@thewildwithyou</div>
                        </Stack>


                    </Stack>
                </div>
                <div className={styled.rightcard2}>
                    <Stack direction={'row'} gap={2} alignSelf={'flex-end'} display={"flex"}
                        style={{
                            marginLeft: "4%",
                            marginBottom: "4%"
                        }}>
                        <div>
                            <img src={Profile2} />
                        </div>
                        <Stack direction={'column'} gap={1}>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 16
                            }} >Chris Doe</div>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 12
                            }} >@thewildwithyou</div>
                        </Stack>


                    </Stack>
                </div>
                <div className={styled.rightcard3}>
                    <Stack direction={'row'} gap={2} alignSelf={'flex-end'} display={"flex"}
                        style={{
                            marginLeft: "4%",
                            marginBottom: "4%"
                        }}>
                        <div>
                            <img src={Profile3} />
                        </div>
                        <Stack direction={'column'} gap={1}>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 16
                            }} >Emilie Jones</div>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 12
                            }} >@thewildwithyou</div>
                        </Stack>


                    </Stack>
                </div>
                <div className={styled.rightcard4}>
                <Stack direction={'row'} gap={2} alignSelf={'flex-end'} display={"flex"}
                        style={{
                            marginLeft: "4%",
                            marginBottom: "4%"
                        }}>
                        <div>
                            <img src={Profile4} />
                        </div>
                        <Stack direction={'column'} gap={1}>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 16
                            }} >Jessica Williams</div>
                            <div style={{
                                color: "#FFFFFF",
                                fontSize: 12
                            }} >@thewildwithyou</div>
                        </Stack>


                    </Stack>
                </div>
                <div className={styled.rightcard5}>

                </div>


            </div>
            <Stack direction={'row'} justifyContent={'space-between'} marginTop={"4%"}>
                <div className={styled.bottomtext}>Privacy</div>
                <div className={styled.bottomtext}>Terms of Service Cookie Notice</div>
            </Stack>
        </div>
    );
}

export default RightSidebar;