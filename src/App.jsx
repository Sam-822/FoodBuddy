import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import PlaceHolder from './components/PlaceHolder'
import Reciepe from './components/Reciepe'

function App() {

  return (
    <>
      <NavBar />
			<Routes>
				<Route path='/*' element={<PlaceHolder />}></Route>
				<Route exact path='/indian' element={<Reciepe key='indian' cuisine='indian' />}></Route>
				<Route exact path='/american' element={<Reciepe key='american' cuisine='american'/>}></Route>
				<Route exact path='/british' element={<Reciepe key='british' cuisine='british'/>}></Route>
				<Route exact path='/canadian' element={<Reciepe key='canadian' cuisine='canadian'/>}></Route>
				<Route exact path='/chinese' element={<Reciepe key='chinese' cuisine='chinese'/>}></Route>
				<Route exact path='/croatian' element={<Reciepe key='croatian' cuisine='croatian'/>}></Route>
				<Route exact path='/dutch' element={<Reciepe key='dutch' cuisine='dutch'/>}></Route>
				<Route exact path='/egyptian' element={<Reciepe key='egyptian' cuisine='egyptian'/>}></Route>
				<Route exact path='/filipino' element={<Reciepe key='filipino' cuisine='filipino'/>}></Route>
				<Route exact path='/french' element={<Reciepe key='french' cuisine='french'/>}></Route>
			</Routes>
    </>
  )
}

export default App