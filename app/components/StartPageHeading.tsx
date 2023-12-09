import { Box, Typography } from '@mui/material';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';

const containerStyle = {
    scrollSnapType: 'y mandatory',
    overflowY: 'auto',
    height: '100vh'
};

const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    scrollSnapAlign: 'center'
};

const glassmorphism = {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    margin: '30px'
};

const StartPageHeading = () => {
    return (
        <Box sx={containerStyle}>
            <Box sx={sectionStyle}>
                <Box>
                    <Typography>Frontend developer Jenny Bäcklin</Typography>
                </Box>
            </Box>
            <Box sx={sectionStyle}>
                <AboutSection />
            </Box>
            <Box sx={sectionStyle}>
                <ProjectSection />
            </Box>
        </Box>
    );
};

export default StartPageHeading;
