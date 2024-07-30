import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import PlaceHolder from './components/PlaceHolder'
import Reciepe from './components/Reciepe'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

	return (
		<>
			<NavBar/>
			<Routes>
				<Route path='/*' element={<PlaceHolder />}></Route>
				<Route exact path='/indian' element={<Reciepe key='indian' cuisine='indian' />}></Route>
				<Route exact path='/american' element={<Reciepe key='american' cuisine='american' />}></Route>
				<Route exact path='/british' element={<Reciepe key='british' cuisine='british' />}></Route>
				<Route exact path='/canadian' element={<Reciepe key='canadian' cuisine='canadian' />}></Route>
				<Route exact path='/chinese' element={<Reciepe key='chinese' cuisine='chinese' />}></Route>
				<Route exact path='/croatian' element={<Reciepe key='croatian' cuisine='croatian' />}></Route>
				<Route exact path='/dutch' element={<Reciepe key='dutch' cuisine='dutch' />}></Route>
				<Route exact path='/egyptian' element={<Reciepe key='egyptian' cuisine='egyptian' />}></Route>
				<Route exact path='/filipino' element={<Reciepe key='filipino' cuisine='filipino' />}></Route>
				<Route exact path='/french' element={<Reciepe key='french' cuisine='french' />}></Route>
				<Route exact path='/greek' element={<Reciepe key='greek' cuisine='greek' />}></Route>
				<Route exact path='/irish' element={<Reciepe key='irish' cuisine='irish' />}></Route>
				<Route exact path='/italian' element={<Reciepe key='italian' cuisine='italian' />}></Route>
				<Route exact path='/jamaican' element={<Reciepe key='jamaican' cuisine='jamaican' />}></Route>
				<Route exact path='/japanese' element={<Reciepe key='japanese' cuisine='japanese' />}></Route>
				<Route exact path='/kenyan' element={<Reciepe key='kenyan' cuisine='kenyan' />}></Route>
				<Route exact path='/moroccan' element={<Reciepe key='moroccan' cuisine='moroccan' />}></Route>
				<Route exact path='/polish' element={<Reciepe key='polish' cuisine='polish' />}></Route>
				<Route exact path='/portuguese' element={<Reciepe key='portuguese' cuisine='portuguese' />}></Route>
				<Route exact path='/russian' element={<Reciepe key='russian' cuisine='russian' />}></Route>
				<Route exact path='/spanish' element={<Reciepe key='spanish' cuisine='spanish' />}></Route>
				<Route exact path='/thai' element={<Reciepe key='thai' cuisine='thai' />}></Route>
				<Route exact path='/search' element={<Search />}></Route>
			</Routes>
			<a type="button" className="btn btn-light z-3" href='https://github.com/Sam-822/FoodBuddy' target='_blank' style={{ position: 'fixed', bottom: '10px', right: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
			</svg> View on Github</a>
			<Footer />
		</>
	)
}

export default App










