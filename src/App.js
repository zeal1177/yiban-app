import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN'
import Login from './view/Login';
import User from './view/User';
import Index from './view/Index';
import Friend from './view/Friend';
import Chat from './view/Chat';
import Warning from './view/Warning';
import Market from './view/Market';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route  path='/index'>
            <Index />
          </Route>
          <Route path='/friend'>
            <Friend />
          </Route>
          <Route path='/chat'>
            <Chat />
          </Route>
          <Route path='/warning'>
            <Warning />
          </Route>
          <Route path='/market'>
            <Market />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </ConfigProvider>
  );
}

export default App;
