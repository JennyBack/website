import type { MetaFunction } from '@remix-run/node';
import { Box } from '@mui/material';
import StartPage from '~/components/StartPage';

export const meta: MetaFunction = () => {
    return [
        { title: 'Frontend developer Jenny Bäcklin' },
        { name: 'description', content: 'Frontend developer Jenny Bäcklin portfolio' }
    ];
};

import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getProjects } from '~/models/project.server';

export const loader = async () => {
    return json({ projects: await getProjects() });
};

export default function Index() {
    const { projects } = useLoaderData<typeof loader>();

    return (
        <Box aria-label="site-container" sx={{ backgroundColor: '#B2C7C8', margin: 0, padding: 0 }}>
            <Box aria-label="content-container">
                <StartPage projects={projects} />
            </Box>
            <Box aria-label="footer" sx={{ position: 'absolute', bottom: '20px', left: '5px' }}>
                social media icons
            </Box>
        </Box>
    );
}
