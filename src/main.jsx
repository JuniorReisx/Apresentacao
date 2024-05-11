import React from 'react'
import ReactDOM from 'react-dom/client'
import {About} from './About.jsx'
import {Formacao} from './Formacao.jsx'
import { Footers} from './Footers.jsx'
import './index.css'
import { Header } from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <About />
    <Formacao />
    <Footers />
  </React.StrictMode>,
)
