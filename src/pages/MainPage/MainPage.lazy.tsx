import { lazy } from 'react'
export const MainPageLazy = lazy(async () => {
    return import('./MainPage').then(({ MainPage }) => ({ default: MainPage }))
})