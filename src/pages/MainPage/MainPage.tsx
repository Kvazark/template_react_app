import { useState } from 'react'

export const MainPage = () => {
    const [isError, setIsError] = useState(false)

    if (isError) {
        throw new Error('Some error')
    }

    return (
        <div>
            <h1>Главная страница</h1>
            <button onClick={() => setIsError(true)}>Error</button>
        </div>
    )
}
