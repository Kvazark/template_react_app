import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { ErrorPage } from 'pages/ErrorPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RoutePath } from 'shared/constants'
import { Wrapper } from './ui'

export const router = createBrowserRouter(
    [
        {
            element: <Wrapper />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: RoutePath.main,
                    element: <MainPage />,
                },
                {
                    path: RoutePath.about,
                    element: <AboutPage />,
                },
                {
                    path: RoutePath.notFound,
                    element: <NotFoundPage />,
                },
            ],
        },
    ],
    { basename: BASE_NAME }
)
