import { lazy } from 'react'
export const AboutPageLazy = lazy(async () => {
    return import('./AboutPage').then(({ AboutPage }) => ({ default: AboutPage }))
})