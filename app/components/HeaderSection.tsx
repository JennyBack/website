import { Avatar, Box, Typography } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const sectionContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'
};

const avatarStyle = {
    height: '200px',
    width: '200px',
    margin: '25px'
};

const HeaderSection = () => {
    return (
        <Box aria-label={'about-section'} sx={sectionContainer}>
            <Typography>Frontend developer Jenny Bäcklin</Typography>
            <ArrowCircleDownIcon />
        </Box>
    );
};

export default HeaderSection;
