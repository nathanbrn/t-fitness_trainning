import { createBrowserRouter } from 'react-router-dom'
import { BicepsPage } from './pages/BicepsPage'
import { HomePage } from './pages/HomePage'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'biceps',
        element: <BicepsPage />,
    }

])
