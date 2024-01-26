import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import TextForm from "./components/TextForm.jsx";
import About from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<TextForm/>} />
      <Route path='about' element={<About />} />
      
    </Route>
  )
)
// const rootElement = document.getElementById("root");
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>

      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
  // rootElement
);
