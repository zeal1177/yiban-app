import React, { useState } from 'react';
import { TabBar, Icon  } from 'antd-mobile';
import { Tabs, Menu } from 'antd';
import { Link,useLocation } from 'react-router-dom'
// import PropTypes from 'prop-types'
import Index from '../Index';
import Warning from '../Warning';
import Market from '../Market';

const { TabPane } = Tabs;


const Tab = () => {
    return(
        <div className="tab" style={{ position: 'fixed' , width:'100%', bottom:0}}>
           
            <Menu mode="horizontal">
                <Menu.Item key="index" title="课表"> 
                    <Link to='/index'></Link>
                    <span> <i  className="iconfont">&#xe604;</i> 课表</span>
                </Menu.Item>
                <Menu.Item key="warning" title="学情警示"> 
                    <Link to='/warning'></Link>
                    <span> <i className="iconfont">&#xe60e;</i> 学情警示</span>
                </Menu.Item>
                <Menu.Item key="market" title="跳蚤市场"> 
                    <Link to='/market'></Link>
                    <span><i className="iconfont">&#xe631;</i> 跳蚤市场</span>
                </Menu.Item>
            </Menu>
        </div>
    )
}



// Tab.propTypes = {
//     children: PropTypes.object,
//     location: PropTypes.object,
//   }

export default Tab;