import React, {useState} from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import '../index.css'
import HomePage from '../routes/HomePage.jsx'
import AboutPage from '../routes/AboutPage.jsx'
import ErrorPage from '../routes/ErrorPage.jsx'
import RPSGame from '../routes/Game/Game.jsx'
import Layout from '../components/Layout.jsx'
import { NameContext } from './NameContext.jsx'

const routes = createBrowserRouter([
    {
      path: `/`,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: `/rps`,
          element: <RPSGame />
        },
        {
          path: `/about`,
          element: <AboutPage />
        }
      ]
    },
  ], { basename: import.meta.env.BASE_URL})

export const Providers = () => {
    const [name, setName] = useState(`From Providers`);

    return (
        <NameContext.Provider value={{name, setName}}>
            <RouterProvider router={routes} />
        </NameContext.Provider>
    )
}