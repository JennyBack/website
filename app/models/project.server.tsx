export type Project = {
    slug: string;
    title: string;
    description: string;
    toolbox: string[];
};

export async function getProjects(): Promise<Array<Project>> {
    return [
        {
            slug: 'portfolio-website',
            title: 'Creating a portfolio website',
            description: 'Lorem ipsum dolor',
            toolbox: ['Remix.js', 'HTML5', 'CSS', 'Material UI', 'S.O.L.I.D', 'Strapi']
        },
        {
            slug: 'collage-creator',
            title: 'Creating a portfolio project',
            description: '',
            toolbox: ['React.js', 'Material UI', 'HTML5']
        }
    ];
}
