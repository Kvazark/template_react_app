import { StrictMode, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { LoadingPage } from 'pages/LoadingPage'

import { router } from './routes'

export const App = () => {
    return (
        <StrictMode>
            <Suspense fallback={<LoadingPage />}>
                <RouterProvider router={router} />
            </Suspense>
        </StrictMode>
    )
}