import globalStyles from '~/styles/global.css';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

let theme = createTheme({
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
    },
    typography: {
        h1: {
            fontFamily: 'Rozha One,sans-serif',
            fontSize: '4rem',
            cursor: 'none'
        }
    }
});

theme = responsiveFontSizes(theme);

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: globalStyles }];
};

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
