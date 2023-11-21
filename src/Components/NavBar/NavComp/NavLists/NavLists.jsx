
import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import NavButton from "../NavButton/NavButton.jsx";
import {Link} from "react-router-dom";


export default function NavLists() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const updateWindowWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);


    return (
        <React.Fragment>
            {isMobile && (
                <button onClick={handleToggleDrawer} className={"themeBtn w-fit nav-drop-shadow py-1 px-1 font-semibold text-1xl rounded-md border-black border-2"}>
                    <Menu />
                </button>
            )}
            {isMobile && (
                <Drawer open={open} onClose={handleCloseDrawer}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            ml: 'auto',
                            mt: 1,
                            mr: 1,
                        }}
                    >
                        <Typography
                            component="label"
                            htmlFor="close-icon"
                            fontSize="sm"
                            fontWeight="lg"
                            sx={{ cursor: 'pointer' }}
                        >
                            <h1 style={{ fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>close</h1>
                        </Typography>
                        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                    </Box>
                    <List
                        size="lg"
                        component="nav"
                        sx={{
                            flex: 'none',
                            mt: 3,
                            '& > div': { justifyContent: 'flex-start' }, // Align text to the left
                        }}
                    >

                        <Link to={"/login"}>
                            <ListItemButton onClick={handleCloseDrawer}>
                                <NavButton value={'LOG IN'} bg={"bg-purple-500"}/>
                            </ListItemButton>
                        </Link>


                    </List>
                </Drawer>
            )}
            {!isMobile && (
                <ul className={"flex gap-5"}>

                    <Link to={"/login"}>
                        <div className={"flex gap-3"}>
                            <svg className={"-mt-2"} xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 144 43" fill="none">
                                <path d="M94.711 11.037C87.917 8.15596 85.422 4.68897 87.95 1.64197C88.662 0.783968 90.243 0.0819702 91.462 0.0819702C95.743 0.0819702 109.575 4.16098 117 7.61298C121.125 9.52998 128.316 12.347 132.98 13.873C139.51 16.008 141.798 17.249 142.933 19.271C145.61 24.041 143.446 26.361 130.562 32.531C112.647 41.111 102 44.146 102 40.675C102 38.822 110.596 31.681 117.23 28.024L122.5 25.118L118.469 25.1C114.234 25.081 54.84 28.343 27.5 30.096C18.7 30.66 9.877 31.614 7.894 32.214C3.003 33.696 -0.245997 32.034 0.190003 28.272C0.584003 24.874 3.787 23.301 13.837 21.569C27.717 19.177 78.115 15.129 94.417 15.097C98.771 15.089 102.016 14.764 101.628 14.376C101.24 13.988 98.127 12.486 94.711 11.037Z" fill="#7E22CE"/>
                            </svg>
                            <NavButton value={'LOG IN'} bg={"bg-purple-500"}/>
                        </div>
                    </Link>

                </ul>
            )}
        </React.Fragment>
    );
}


