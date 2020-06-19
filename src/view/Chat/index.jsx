import React from 'react';
import { TabBar, NavBar, Icon, SearchBar  } from 'antd-mobile';
import Tab from '../Tab'
import './index.css'


const Chat = () => {
    return(
        <div className="chat" >
           <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="1" type="ellipsis" />,
            ]}
            >小杨</NavBar>
           <div className="main">
            <div className="content">
                <p className="left">
                    <span className="logo"><img src="http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg"/></span>
                    <span className="text">我们加为好友啦</span>
                </p>
                <p className="left">
                    <span className="logo"><img src="http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg"/></span>
                    <span className="text">hello,我看你推荐挺不错的</span>
                </p>
                <p className="right">
                    <span className="text">谢谢夸奖，开心</span>
                    <span className="logo"><img src="http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg"/></span>
                </p>
                <p className="left">
                    <span className="logo"><img src="http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg"/></span>
                    <span className="text">有时间一起去看看</span>
                </p>
                <p className="right">
                    <span className="text">可以啊</span>
                    <span className="logo"><img src="http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg"/></span>
                </p>
                <p className="left">
                    <span className="logo"><img src="http://b-ssl.duitang.com/uploads/item/201809/03/20180903221721_uzVAQ.thumb.700_0.jpeg"/></span>
                    <span className="text">那先这样聊了</span>
                </p>
                <p className="right">
                    <span className="text">嗯呢，再见</span>
                    <span className="logo"><img src="http://wx1.sinaimg.cn/orj360/007cCWrJly1gdy7fb2kqhj30kx0kwjro.jpg"/></span>
                </p>
            </div>
            <SearchBar className="search" placeholder="请输入聊天内容" />
           </div>
        </div>
    )
}

export default Chat;