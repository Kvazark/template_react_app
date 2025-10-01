import type { WebpackPluginInstance } from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import { htmlPath } from '../lib/constants'

export const buildHtmlWebpackPlugin = (): WebpackPluginInstance => {
    return new HtmlWebpackPlugin({
        template: htmlPath,
    })
}