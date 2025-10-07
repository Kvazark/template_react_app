import type { TBuildOptions } from '../lib/types'
import type { RuleSetRule } from 'webpack'

import { buildCssLoader, buildSvgLoader, buildTypescriptLoader } from '../loaders'

type TBuildLoaders = (options: TBuildOptions) => RuleSetRule[]

export const buildLoaders: TBuildLoaders = (options) => {
    const typescriptLoader = buildTypescriptLoader(options)
    const cssLoader = buildCssLoader()
    const svgLoader = buildSvgLoader()

    return [typescriptLoader, cssLoader, svgLoader]
}