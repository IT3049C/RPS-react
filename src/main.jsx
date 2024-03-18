import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './routes/RPS-Game/Game.jsx'
import ErrorPage from './routes/error.jsx'

const routes = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    exact: true,
    errorElement: <ErrorPage />,
  },
], {basename: '/rps-react'})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
