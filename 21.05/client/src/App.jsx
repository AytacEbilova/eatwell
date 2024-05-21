
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import { ROUTES } from './routes/ROTES';
import BasketProvider from './context/basketContext.jsx'
function App() {
  const router = createBrowserRouter(ROUTES)
  return (
    <>
    <BasketProvider >
    <RouterProvider router={router} />
    </BasketProvider> 
    </>
  )
}

export default App
