import type { RuleSetRule } from 'webpack'

export const buildCssLoader = (): RuleSetRule => {
    return {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }
}