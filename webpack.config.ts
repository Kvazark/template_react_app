import type { Configuration } from 'webpack'
import type { TBuildEnv } from './configs/webpack'
import { buildWebpackConfig } from './configs/webpack'

export default (env: TBuildEnv): Configuration => buildWebpackConfig(env)
