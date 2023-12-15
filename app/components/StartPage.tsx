import { Box } from '@mui/material';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';
import HeaderSection from './HeaderSection';
import { Project } from '~/models/project.server';

type ExternalProps = {
    projects: Project[];
};

type Texts = {
    headerTitle: string;
};

type StartPageProps = {
    texts: Texts;
} & ExternalProps;

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

const StartPage = (props: StartPageProps) => {
    let { projects, texts } = props;
    return (
        <Box sx={containerStyle}>
            <Box sx={sectionStyle}>
                <HeaderSection headerTitle={texts.headerTitle} />
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

const TextLayer = (props: ExternalProps) => {
    let texts = {
        headerTitle: 'Frontend developer Jenny Bäcklin'
    };

    return <StartPage texts={texts} {...props} />;
};

export default TextLayer;
