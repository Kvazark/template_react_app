import type { TBuildOptions } from '../lib/types'
import type { Configuration as TDevServerConfiguration } from 'webpack-dev-server'

type TBuildDevServer = (options: TBuildOptions) => TDevServerConfiguration | undefined

/**
 * Configures the webpack-dev-server for local development.
 */
export const buildDevServer: TBuildDevServer = ({ PORT, isDev }) => {
    if (isDev) {
        return {
            port: PORT,
            open: true,
            hot: true,
            historyApiFallback: true,
        }
    }
}
