import type { TAllBuildEnv, TBuildOptions } from './types'

import { defaultBuildEnv } from './constants'

type TGetBuildOptions = (env: TAllBuildEnv) => TBuildOptions
export const getBuildOptions: TGetBuildOptions = (env) => {
    const NODE_ENV = env.NODE_ENV || defaultBuildEnv.NODE_ENV
    const PORT = env.PORT || defaultBuildEnv.PORT
    const PUBLIC_PATH = env.PUBLIC_PATH || defaultBuildEnv.PUBLIC_PATH
    const BASE_NAME = env.BASE_NAME || defaultBuildEnv.BASE_NAME
    const isDev = NODE_ENV === 'development'

    return { NODE_ENV, PORT, BASE_NAME, PUBLIC_PATH, isDev }
}
