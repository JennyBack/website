import { Avatar, Box, Typography } from '@mui/material';
import { glassmorphism } from './StartPage';

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
    margin: '25px',
    alignSelf: 'center'
};

const AboutSection = () => {
    return (
        <Box aria-label={'about-section'} sx={sectionContainer}>
            <Box sx={glassmorphism(240)}>
                <Avatar alt={'Jenny backlin img'} src={''} sx={avatarStyle} />
                <Typography sx={{ fontFamily: 'Questrial, sans-serif' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={glassmorphism()}>
                    <Typography sx={{ fontFamily: 'Questrial, sans-serif' }}>
                        Technologies
                    </Typography>
                </Box>
                <Box sx={glassmorphism()}>
                    <Typography sx={{ fontFamily: 'Questrial, sans-serif' }}>
                        Education/Experiences
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutSection;
