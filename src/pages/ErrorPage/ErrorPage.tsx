import { useRouteError } from 'react-router-dom'
import { RoutePath } from 'shared/constants'

export const ErrorPage = () => {
    const error = useRouteError()

    const goToMainPage = () => {
        location.href = RoutePath.main
    }

    return (
        <div>
            <p>Что-то пошло не так</p>
            <p>{`${error}`}</p>
            <button onClick={goToMainPage}>Main page</button>
        </div>
    )
}
