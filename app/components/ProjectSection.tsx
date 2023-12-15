import { Box, List, ListItem, Typography } from '@mui/material';
import BasicCard from './ProjectsListItem';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { Project, getProjects } from '~/models/project.server';

type ProjectSectionProps = {
    projects: Project[];
};

const sectionContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'
};

export const loader = async () => {
    return json({ projects: await getProjects() });
};

const ProjectSection = ({ projects }: ProjectSectionProps) => {
    return (
        <Box aria-label={'project-blog-list'} sx={sectionContainer}>
            <List>
                {projects.map((project: Project, index) => {
                    return (
                        <ListItem key={project.slug}>
                            <BasicCard key={project.slug + index} project={project} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default ProjectSection;
