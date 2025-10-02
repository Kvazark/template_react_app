import type { TBuildEnv } from './types'

import { resolve } from 'path'

export const defaultBuildEnv: Required<TBuildEnv> = {
    NODE_ENV: 'development',
    PORT: 3000,
    PUBLIC_PATH: 'auto',
    BASE_NAME: '/',
}
export const srcPath = resolve(process.cwd(), 'src')
export const buildPath = resolve(process.cwd(), 'dist')
export const entryPath = resolve(process.cwd(), 'src', 'index.tsx')
export const htmlPath = resolve(process.cwd(), 'public', 'index.html')
export const nodeModulesPath = resolve(process.cwd(), 'node_modules')
