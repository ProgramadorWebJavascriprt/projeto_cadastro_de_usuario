import React from 'react'
// segunda-feira,30 de maio de 2022 as 21:05:00 h+|-
import {Switch, Route, Redirect} from 'react-router'
import home from '../components/home/home'
import Home from '../components/home/home'
import usercrud from '../components/user/userCrud'

export default  prop => 
 <Switch>
     <Route exact path='/' component={home}/>
     <Route path='/users' component={usercrud}/>
     <Redirect from='*' to='/'/>
 </Switch>