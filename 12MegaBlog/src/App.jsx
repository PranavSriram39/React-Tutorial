import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./Store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const bootstrappedRef = useRef(false)

  useEffect(() => {
    // Avoid double-calling in React StrictMode (dev)
    if (bootstrappedRef.current) return
    bootstrappedRef.current = true

    let hasSessionHint = false
    try {
      hasSessionHint = window.localStorage.getItem("appwrite:hasSession") === "1"
    } catch {}

    if (!hasSessionHint) {
      dispatch(logout())
      setLoading(false)
      return
    }

    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
