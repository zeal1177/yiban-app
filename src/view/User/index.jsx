import React from 'react';
import { Tabs, NavBar, Icon, Button  } from 'antd-mobile';
import Tab from '../Tab'
import './index.css'

const User = () => {
    const data = [
        {
            title: 'http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg',
            name: '小杨',
            id: 1,
            content:{
                text: '今天打卡一家超好吃的蛋糕店',
                img: 'https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201310/12287/display_12287_70232.jpg'
            }
        },
        {
            title: 'http://img1.imgtn.bdimg.com/it/u=1305353222,2352820043&fm=26&gp=0.jpg',
            name: '小周',
            id: 3,
            content:{
                text: '有没有周末一起玩的呀，最近好无聊啊',
               
            }
        }
    ]
    const tabs = [
        { title: '发布过的', sub: '1' },
        { title: '点赞过的', sub: '2' },
        { title: '评论过的', sub: '3' },
      ];
    return(
        <div className="user">
            <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="1" type="ellipsis" />,
            ]}
            >个人中心</NavBar>
            <div className="header">
                <div className="left">
                    <img src="http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg"/>
                </div>
                <div className="right">
                    <p className="name"><span>小张</span>  <Button className="btn" size="small">退出登录</Button></p>
                    <p className="account">19873742319</p>
                </div>
            </div>
            <Tabs tabs={tabs}
                initialPage={1} 
                renderTab={tab => <span>{tab.title}</span>}
            >
                <div >
                ll
                </div>
                <div >
                {data.map(item => {
                        return(<div className="content">
                        <div className="logo"><img src={item.title}/></div>
                        <div className="main">
                            <p className="name">{item.name}</p>
                            <p className="text">{item.content.text}</p>
                            {item.content.img ? <div className="pic"><img src={item.content.img}/></div> : null}
                            <p className="icon">
                                <i class="iconfont">&#xe79d;</i>
                                <i class="iconfont">&#xe74f;</i>
                                <i class="iconfont">&#xe7b3;</i>
                            </p>
                        </div>
                    </div>)
                    })}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
          </Tabs>
            <Tab/>
        </div>
    )
}

export default User;