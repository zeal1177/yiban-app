import React from 'react';
import { Tabs, NavBar, Icon, Button  } from 'antd-mobile';
import Tab from '../Tab'
import './index.css'
import pic1 from '../../img/pic1.jpg'
import pic2 from '../../img/pic2.jpg'
import pic3 from '../../img/pic3.jpg'

const Market = () => {
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
    const book = [
        {
            img: pic1,
            name:'java语言程序设计',
            key: '1',
            price:'￥25.0',
            desc: 'java书籍Java从入门到项目实战2019java语言程序设计软件开发教程电脑计算机编程零基础java软件编程入门自学书java从入门到精通'
        },
        {
            img: pic2,
            name:'大数据挖掘与应用',
            key: '2',
            price: '￥28.0',
            desc: '【官方正版】 大数据挖掘及应用 大数据系列丛书 王国胤 刘群 于洪 曾宪华 清华大学出版社'
        },
        {
            img: pic3,
            name:'口才三绝',
            key: '1',
            price:'￥15.0',
            desc: '口才三绝正版全套为人三会 套装修心三不 3本 提高情商聊天沟通术演讲与口才训练说话技巧交往的书籍 畅销书排行榜 抖音推荐'
        }
    ]
    const tabs = [
        { title: '图书', sub: '1' },
        { title: '生活用品', sub: '2' },
        { title: '回收物品', sub: '3' },
      ];
    return(
        <div className="user">
            <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="1" type="search" style={{ marginRight: '16px' }}/>,
                <Icon key="1" type="ellipsis" />,
            ]}
            >跳蚤市场</NavBar>
            <div className="header">
                <div className="left">
                    <img src="http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg"/>
                </div>
                <div className="right">
                    <p className="name"><span>小张</span>  <Button className="btn" size="small">个人清单</Button></p>
                    <p className="account">19873742319</p>
                </div>
            </div>
            <Tabs tabs={tabs}
                initialPage={0} 
                renderTab={tab => <span>{tab.title}</span>}
            >
                <div className="book">
                    {book.map(item => {
                        return <div className="book-item">
                            <div className="img">
                                <img src={item.img}/>
                            </div>
                            <div className="right">
                                <p className="name">{item.name}</p>
                                <p className="desc">{item.desc}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        </div>
                    })}
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

export default Market;