import type { TBuildOptions } from '../lib/types'
import type { WebpackPluginInstance } from 'webpack'

import { buildDefinePlugin } from '../plugins'
import { buildHtmlWebpackPlugin } from '../plugins/buildHtmlWebpackPlugin'

type TBuildPlugins = (options: TBuildOptions) => WebpackPluginInstance[]

/**
 * Configures the plugins to be used during the webpack build process.
 */
export const buildPlugins: TBuildPlugins = (options) => {
  const htmlWebpackPlugin = buildHtmlWebpackPlugin()
  const definePlugin = buildDefinePlugin(options)

  return [htmlWebpackPlugin, definePlugin]
}
