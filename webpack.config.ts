import type { Configuration } from 'webpack'
import { buildWebpackConfig, TBuildEnv } from './configs/webpack'

export default (env: TBuildEnv): Configuration => buildWebpackConfig(env)