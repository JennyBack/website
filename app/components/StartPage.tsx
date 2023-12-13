import { Box } from '@mui/material';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';
import HeaderSection from './HeaderSection';
import { Project } from '~/models/project.server';

type StartPageProps = {
    projects: Project[];
};

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

export const glassmorphism = (minWidth?: number | null) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.50)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(14px)',
        webkitBackdropFilter: 'blur(14.1px)',
        border: '1px solid rgba(255, 255, 255, 0.61)',
        margin: '30px',
        minWidth: minWidth ? minWidth : '',
        width: '100%'
    };
};

const StartPage = ({ projects }: StartPageProps) => {
    return (
        <Box sx={containerStyle}>
            <Box sx={sectionStyle}>
                <HeaderSection />
            </Box>
            <Box sx={sectionStyle}>
                <AboutSection />
            </Box>
            <Box sx={sectionStyle}>
                <ProjectSection projects={projects} />
            </Box>
        </Box>
    );
};

export default StartPage;
