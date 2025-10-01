import type { ResolveOptions } from 'webpack'

import { nodeModulesPath, srcPath } from '../lib/constants'

/**
 * Configures how webpack resolves module requests (e.g., import statements).
 */
export const buildResolvers = (): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcPath, nodeModulesPath],
    mainFiles: ['index'],
  }
}
