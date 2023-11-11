import {Box, Button, Divider, Grid, Typography} from "@mui/material";


const StartPageHeading = () => {
    return (
        <Grid item sx={{display:'flex'}}>
            <Box>
                <Typography>Frontend developer</Typography>
                <Divider orientation="vertical"  sx={{height:'1.5rem'}}/>
            </Box>
            <Box sx={{display:'flex',alignSelf:'flex-end',marginTop:'40px', marginBottom:'25px'}}>
                <Typography>Jenny Bäcklin</Typography>
                <Divider orientation="vertical"  sx={{height:'1.5rem',marginTop:'20px'}}/>
            </Box>
            <Box sx={{display:'flex',alignSelf:'flex-end'}}>
                <Button>Menu</Button>
            </Box>
        </Grid>
    );
}

export default StartPageHeading;