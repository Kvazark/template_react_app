import type { TBuildMode } from 'react-app-constants/webpack'

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.woff2'
declare module '*.woff'

declare global {
    const IS_DEV: boolean
    const NODE_ENV: TBuildMode
    const PORT: number
    const PUBLIC_PATH: string
    const BASE_NAME: string
}