import type { TBuildOptions } from '../lib/types'
import type { WebpackPluginInstance } from 'webpack'
import { DefinePlugin } from 'webpack'

type TBuildDefinePlugin = (options: TBuildOptions) => WebpackPluginInstance

export const buildDefinePlugin: TBuildDefinePlugin = ({ NODE_ENV, PORT, PUBLIC_PATH, BASE_NAME, isDev }) => {
    return new DefinePlugin({
        IS_DEV: JSON.stringify(isDev),
        NODE_ENV: JSON.stringify(NODE_ENV),
        PORT: JSON.stringify(PORT),
        PUBLIC_PATH: JSON.stringify(PUBLIC_PATH),
        BASE_NAME: JSON.stringify(BASE_NAME),
    })
}
