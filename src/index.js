import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/screens/home/Home'
import './assets/styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

