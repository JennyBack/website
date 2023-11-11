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
        <Grid container sx={{ display:'flex', justifyContent:'center',alignContent:'center',height: '100vh', width: '100%', flexDirection:'column'}}>
          <StartPageHeading/>
            <Grid item >
                <Link to={'/projects'}>Download Resume</Link>
            </Grid>
        </Grid>
    );
}
