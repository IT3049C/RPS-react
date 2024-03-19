import React from 'react'
import ReactDOM from 'react-dom/client'
import RPSGame from './routes/Game/Game.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import HomePage from './routes/HomePage.jsx'
import AboutPage from './routes/AboutPage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: `/rps`,
    element: <RPSGame />
  },
  {
    path: `/about`,
    element: <AboutPage />
  }
], { basename: `/rps-react`})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
