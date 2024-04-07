import React from "react"
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import LandingPage from '@/pages/landingPage'
import SignUpPage from '@/pages/signupPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<LandingPage />} />
    <Route
      path="signup"
      element={<SignUpPage />}
    />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App