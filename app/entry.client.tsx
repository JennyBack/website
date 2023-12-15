/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
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

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <ThemeProvider theme={theme}>
                <RemixBrowser />
            </ThemeProvider>
        </StrictMode>
    );
});
