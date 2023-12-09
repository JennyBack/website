import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import StartPageHeading from "~/components/StartPageHeading";


export const meta: MetaFunction = () => {
    return [
        {title: "Frontend developer Jenny Bäcklin"},
        {name: "description", content: "Frontend developer Jenny Bäcklin portfolio"},
    ];
};

export default function Index() {
    return (
        <Box aria-label='site-container' sx={{ backgroundColor:'#B2C7C8'}}>
            <Box aria-label='content-container'>
                <StartPageHeading/>
            </Box>
            <Box aria-label='footer'>social media icons</Box>
        </Box>
    );
}
