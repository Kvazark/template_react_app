import type { ResolveOptions } from 'webpack'

import { nodeModulesPath, srcPath } from '../lib/constants'

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [srcPath, nodeModulesPath],
        mainFiles: ['index'],
    }
}