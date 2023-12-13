import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getProjects } from '~/models/project.server';

export const loader = async () => {
    return json({ projects: await getProjects() });
};

export default function ProjectsIndexRoute() {
    const { projects } = useLoaderData<typeof loader>();
    return (
        <div>
            <p>Projects</p>
            <p>List all projects</p>
        </div>
    );
}
