import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#C6A99E'
        },
        secondary: {
            main: '#B2C7C8'
        },
        warning: {
            main: '#F87474'
        }
    }
});

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <Outlet />
                </ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
