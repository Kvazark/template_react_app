import { lazy } from 'react'

export const NotFoundPageLazy = lazy(() =>
    import('./NotFoundPage').then(({ NotFoundPage }) => ({
        default: NotFoundPage,
    }))
)
