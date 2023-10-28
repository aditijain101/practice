import React from 'react';
import styled from "./mid.module.css";
import { Stack } from '@mui/material';
import Pic1 from "../../assets/pic1.png";
import Pic2 from "../../assets/pic2.png";
import back1 from "../../assets/back1.png";
import back2 from "../../assets/back2.png";
import heart1 from "../../assets/heart1.svg";
import comment1 from "../../assets/comment1.svg";
import share from "../../assets/share.png";
import card1 from "../../assets/card1.png";
import card2  from "../../assets/card2.png";
import card3  from "../../assets/card3.png";
import star from "../../assets/star.svg";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function mid(props) {
    return (
        <div className={styled.container}>


            <div className={styled.commonContainer}>
                <Stack direction={'column'} gap={1} className={styled.header}>
                    <Stack direction={'row'} justifyContent={"space-between"} margin={2} alignItems={'center'}>
                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                            <img src={Pic1} />
                            <Stack direction={'column'} alignItems={'baseline'} >
                                <div>Lara Leones</div>
                                <div style={{
                                    color: "#8D8D8D",
                                    fontSize: 13
                                }}>@thewallart</div>
                            </Stack>
                        </Stack>
                        <MoreVertIcon />

                    </Stack>
                    <Stack style={{
                        marginLeft: "2%",
                        alignItems: "flex-start"
                    }}>
                        <div style={{
                            fontSize: 14,
                            display: "flex",
                            alignSelf: "flex-start",
                            fontWeight: 500,
                            fontStyle: "Lato"
                        }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More</div>
                    </Stack>
                    <Stack margin={2} borderBottom={"#8D8D8D"}>
                        <img src={back1} />
                    </Stack>
                    <Stack direction={'row'} gap={2} margin={2}>
                        <img src={heart1} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>9.8k</div>
                        <img src={comment1} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>8.6k</div>
                        <img src={share} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>7.2k</div>
                    </Stack>
                </Stack>
            </div>
            <div className={styled.commonContainer1}>
                <Stack direction={'column'} gap={1} className={styled.header}>
                    <Stack direction={'row'} justifyContent={"space-between"} margin={2} alignItems={'center'}>
                        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                            <img src={Pic2} />
                            <Stack direction={'column'} alignItems={'baseline'} >
                                <div>Thomas J.</div>
                                <div style={{
                                    color: "#8D8D8D",
                                    fontSize: 13
                                }}>@thewallart</div>
                            </Stack>
                        </Stack>
                        <MoreVertIcon />

                    </Stack>
                    <Stack style={{
                        marginLeft: "2%",
                        alignItems: "flex-start"
                    }}>
                        <div style={{
                            fontSize: 14,
                            display: "flex",
                            alignSelf: "flex-start",
                            fontWeight: 500,
                            fontStyle: "Lato"
                        }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More</div>
                    </Stack>
                    <Stack margin={1} borderBottom={"#8D8D8D"}>
                        <img src={back2} />
                    </Stack>
                    <Stack direction={'row'} gap={2} margin={2}>
                        <img src={heart1} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>9.8k</div>
                        <img src={comment1} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>8.6k</div>
                        <img src={share} width={18} height={18} />
                        <div style={{
                            fontSize: 18
                        }}>7.2k</div>
                    </Stack>
                </Stack>
            </div>
            <div className={styled.commonContainer2}>
                <div style={{
                    width: "40%",
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: "Gilroy",
                    opacity: 1,
                    marginBottom:"5%"
                }} >
                    <Stack direction={'column'} gap={1}>
                        <img src={card1} style={{borderRadius:10}} />
                        <div>Modern Wall Decor Framed Painting</div>
                    </Stack>
                    <div style={{
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "12%",
                        fontWeight: 600,
                        fontSize: 20,
                        fontFamily: "Barlow",
                        color: "#101010",
                        opacity: 1
                    }}>
                        <div >$199.99</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                    </div>

                </div>
                <div style={{
                    
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: "Gilroy",
                    opacity: 1,
                    marginBottom:"5%",
                    marginLeft:"2%",
                    marginRight:"2%",
                    justifyContent:"flex-start"
                }} >
                    <Stack direction={'column'} gap={1} width={200}>
                        <img src={card2} style={{borderRadius:10}} height={145} width={200} />
                        <div>Modern Wall Decor Framed Painting</div>
                    </Stack>
                    <div style={{
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "4%",
                        fontWeight: 600,
                        fontSize: 20,
                        fontFamily: "Barlow",
                        color: "#101010",
                        opacity: 1
                    }}>
                        <div >$199.99</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                    </div>

                </div>
                <div style={{
                    width: "40%",
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: "Gilroy",
                    opacity: 1,
                    marginBottom:"5%"
                }} >
                    <Stack direction={'column'} gap={1}>
                        <img src={card3} style={{borderRadius:10}} />
                        <div>Modern Wall Decor Framed Painting</div>
                    </Stack>
                    <div style={{
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "8%",
                        fontWeight: 600,
                        fontSize: 20,
                        fontFamily: "Barlow",
                        color: "#101010",
                        opacity: 1
                    }}>
                        <div >$199.99</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default mid;