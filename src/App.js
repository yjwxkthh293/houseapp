import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Main from './pages/nav/main/Main'
import Chat from './pages/nav/chat/Chat'
import History from './pages/nav/history/History'
import My from './pages/nav/my/My'
import Citylist from './pages/citylist/Citylist'
import Search from './pages/search/Search'
import Map from './pages/map/Map'


export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Nav}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/reg" component={Reg}></Route>
                        <Route path="/main" component={Main}></Route>
                        <Route path="/chat" component={Chat}></Route>
                        <Route path="/history" component={History}></Route>
                        <Route path="/my" component={My}></Route>
                        <Route path="/citylist" component={Citylist}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route path="/map" component={Map}></Route>
                    </Switch>
                </HashRouter>

            </div>
        )
    }
}
