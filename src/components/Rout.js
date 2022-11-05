import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import App from '../App'
import Update from './Update'
import { ChakraProvider } from '@chakra-ui/react'

function Rout() {
  return (
    <div>
        <Routes>
            {/* <Route path ='/' element={<App/>} ></Route> */}
            <Route path ="/" element={<HomePage/>} ></Route>
            <Route path ='/Update' element={<Update/>} ></Route>
        </Routes>
    </div>
  )
}

export default Rout