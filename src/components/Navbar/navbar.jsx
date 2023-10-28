import React from 'react';
import styled from "./navbar.module.css"
import { Stack } from '@mui/material';
import Search from "../assets/search.png"
import Filter from "../assets/filter.png"
function navbar(props) {
    return (
        <div className={styled.container}>
            <Stack direction={'row'} gap={3} >
                <div className={styled.logoContainer}>
                    LOGO
                </div>
                <div className={styled.midContainer}>
                    <Stack direction={'row'} justifyContent={'space-between'} margin={2} display={'flex'} >
                        <Stack direction={'row'} color={"#9A9A9E"} fontSize={12} display={'flex'} gap={1}>
                            <img src={Search} width={20} height={20}/>
                            <div style={{
                                display:"flex"
                            }}>Search here...</div>
                        </Stack>
                        <Stack direction={'row'}>
                        <Stack direction={'row'} color={"#9A9A9E"} fontSize={12} display={'flex'} gap={1}>
                            <img src={Filter} width={24} height={24}/>
                            <div style={{
                                display:"flex"
                            }}>Filters</div>
                        </Stack>
                        </Stack>

                    </Stack>
                </div>
                <div className={styled.rightContainer}>
                    Become a Seller
                </div>

            </Stack>
        </div>
    );
}

export default navbar;  