import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './components/Home.tsx'
import FavMatches from './components/FavMatches.tsx'
import FavPlayers from './components/FavPlayers.tsx'
import BestMoments from './components/BestMoments.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
        {/* <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/fav-matches' element={<FavMatches/>}/> */}
          <Route index element={<FavMatches/>}/>
          <Route path='/best-moments' element={<BestMoments/>}/>
          <Route path='/fav-players' element={<FavPlayers/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)