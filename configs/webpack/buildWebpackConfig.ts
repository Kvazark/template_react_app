import type { TBuildEnv } from './lib/types'
import type { Configuration } from 'webpack'

import merge from 'webpack-merge'

import { buildDevServer, buildLoaders, buildPlugins, buildResolvers } from './builders'
import { buildPath, entryPath } from './lib/constants'
import { getBuildOptions } from './lib/utils'

type TBuildWebpackConfig = (env: TBuildEnv, customConfig?: Configuration) => Configuration

export const buildWebpackConfig: TBuildWebpackConfig = (env, customConfig) => {
    const options = getBuildOptions(env)
    const { NODE_ENV, PUBLIC_PATH, isDev } = options

    const baseConfig: Configuration = {
        mode: NODE_ENV,
        entry: entryPath,
        output: {
            filename: '[name].[contenthash:4].js',
            path: buildPath,
            clean: true,
            publicPath: PUBLIC_PATH,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: buildDevServer(options),
    }

    if (!customConfig) {
        return baseConfig
    }

    return merge(baseConfig, customConfig)
}