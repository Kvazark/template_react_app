import { RoutePath } from '../../shared/constants'
import { Link, Outlet } from 'react-router-dom'

export const Wrapper = () => {
    return (
        <div>
            <Link to={RoutePath.main}>Main</Link>
            <Link to={RoutePath.about}>About</Link>
            <h1>
                <Outlet />
            </h1>
        </div>
    )
}
