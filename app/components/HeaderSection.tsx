import { Box, Typography } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

type HeaderSectionProps = {
    headerTitle: string;
};

const sectionContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    margin: 'auto'
};

const HeaderSection = ({ headerTitle }: HeaderSectionProps) => {
    return (
        <Box aria-label={'header-section-heading'} sx={sectionContainer}>
            <Typography variant="h1">{headerTitle}</Typography>
            <ArrowCircleDownIcon sx={{ width: '30px', height: '30px' }} color="primary" />
        </Box>
    );
};

export default HeaderSection;
