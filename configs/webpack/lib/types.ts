export type TBuildMode = 'production' | 'development'

export type TAllBuildEnv = {
    NODE_ENV?: TBuildMode
    PORT?: number
    PUBLIC_PATH?: string
    BASE_NAME?: string
}
export type TBuildEnv = Pick<TAllBuildEnv, 'NODE_ENV' | 'PORT' | 'PUBLIC_PATH' | 'BASE_NAME'>
export type TBuildOptions = Required<TBuildEnv> & {
    isDev: boolean
}
