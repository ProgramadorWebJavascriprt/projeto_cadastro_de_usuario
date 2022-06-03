import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'
import  Routes  from './Routes'
import logo from '../components/templates/logo'
import nav from '../components/templates/nav'
import footer from '../components/templates/footer'

export default props =>
<HashRouter>
    <div className="app">
<logo />
<nav />
<Routes />
<footer />
</div>
</HashRouter> 
