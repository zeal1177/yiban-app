import React from 'react';
import { TabBar, NavBar, Icon  } from 'antd-mobile';
import Tab from '../Tab'
import './index.css'


const data = [
    {
        title: 'http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg',
        name: '小杨',
        id: 1,
       text: '今天就聊到这里噢'
    },
    {
        title: 'http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg',
        name: '小张',
        id: 2,
       text:'哇，你推荐的这个东西不错啊'
    },
    {
        title: 'http://img1.imgtn.bdimg.com/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
        name: '小周',
        id: 3,
       text:'我看你每天都有推荐的'
    },
    {
        title: 'http://b-ssl.duitang.com/uploads/item/201706/13/20170613015710_zmhGK.thumb.700_0.jpeg',
        name: '小朱',
        id: 4,
       text:''
    }
]
const Friend = () => {
    return(
        <div className="friend" >
           <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
            >好友列表</NavBar>
            {data.map(item => {
                return <div className="main">
                    <div className="left"><img src={item.title}/></div>
                    <div className="right">
                        <p className="title">{item.name}</p>
                        <p className="text">{item.text}</p>
                    </div>
                    </div>
            })}
           <Tab/>
        </div>
    )
}

export default Friend;