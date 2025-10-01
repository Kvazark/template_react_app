import type { TBuildOptions } from '../lib/types'
import type { RuleSetRule } from 'webpack'

type TBuildTypescriptLoader = (options: TBuildOptions) => RuleSetRule

export const buildTypescriptLoader: TBuildTypescriptLoader = ({ isDev }) => {
    return {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    }
}