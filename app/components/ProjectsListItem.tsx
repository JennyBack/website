import * as React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Divider,
    Chip
} from '@mui/material';
import { Link } from '@remix-run/react';
import { glassmorphism } from './StartPage';
import { Project } from '~/models/project.server';

type BasicCardProps = {
    project: Project;
};

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

function BasicCard({ project }: BasicCardProps) {
    return (
        <Card key={project.title} sx={glassmorphism(275)}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14, fontFamily: 'Questrial, sans-serif' }}
                    color="text.secondary"
                    gutterBottom
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: 'Questrial, sans-serif' }}
                >
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{ mb: 1.5, fontFamily: 'Questrial, sans-serif' }}
                >
                    adjective
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Questrial, sans-serif' }}>
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/projects/${project.slug}`}>
                    <Button size="small">Read about it</Button>
                </Link>
                <Link to={`/applications/${project.slug}`}>
                    <Button size="small">Test it</Button>
                </Link>
            </CardActions>
            <Divider />
            <Box sx={{ margin: '8px' }}>
                {project.toolbox.length > 0
                    ? project.toolbox.map((tool, index) => (
                          <Chip key={tool + index} sx={{ margin: '2px' }} label={tool} />
                      ))
                    : null}
            </Box>
        </Card>
    );
}

export default BasicCard;
