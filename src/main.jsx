import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJob from './components/AppliedJob'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import JobDetails from './components/JobDetails'
import JobLoader from './Loader/LoaderData'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : 'Statistics',
        element : <Statistics></Statistics>
      },
      {
        path : 'jobs',
        element : <AppliedJob></AppliedJob>
      },
      {
        path : 'blog',
        element : <Blog></Blog>
      },
      {
        path :'details/:id',
        element : <JobDetails></JobDetails>,
        loader : ()=> fetch('/featureJob.json'),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
