import type { TBuildOptions } from '../lib/types'
import type { RuleSetRule } from 'webpack'

import { buildTypescriptLoader, buildCssLoader, buildSvgLoader } from '../loaders'

type TBuildLoaders = (options: TBuildOptions) => RuleSetRule[]

/**
 * Configures the loaders (rules) for processing different file types in the project.
 */
export const buildLoaders: TBuildLoaders = (options) => {
    const typescriptLoader = buildTypescriptLoader(options)
    const cssLoader = buildCssLoader()
    const svgLoader = buildSvgLoader()

    return [typescriptLoader, cssLoader, svgLoader]
}
